"use client";

import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { QuizPlayer } from "@/features/quiz_play/components/QuizPlayer";
import { QuizData } from "@/data/quizzes/quiz";

function arrayBufferToWordArray(arrayBuffer: ArrayBuffer) {
  const uint8Array = new Uint8Array(arrayBuffer);
  const words = [];
  for (let i = 0; i < uint8Array.length; i += 4) {
    words.push(
      (uint8Array[i] << 24) |
        (uint8Array[i + 1] << 16) |
        (uint8Array[i + 2] << 8) |
        uint8Array[i + 3],
    );
  }
  return CryptoJS.lib.WordArray.create(words, uint8Array.length);
}

// --- ADAPTER: Converts C# JSON to React format ---
function adaptCSharpToReact(csharpData: any): QuizData {
  const generatedId = `imported-${Date.now()}`;
  const categorySlug = (csharpData.Category || "general").toLowerCase();

  return {
    id: generatedId,
    categorySlug: categorySlug,
    title: csharpData.Title,
    description: csharpData.Description,
    questionCount: csharpData.Questions?.length || 0,
    questions: csharpData.Questions.map((q: any, qIndex: number) => ({
      id: `${generatedId}-q${qIndex}`,
      text: q.Text,
      points: q.Points,
      // Take difficulty from the quiz level if it's missing in the question
      difficulty: csharpData.Difficulty || "Medium",
      answers: q.Answers.map((a: any, aIndex: number) => ({
        id: `a${aIndex}`, // Generate a unique ID for the answer
        text: a.Text,
        isCorrect: a.IsCorrect,
      })),
    })),
  };
}

export const QuizUploader = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // State to store the ADAPTED quiz, ready to play
  const [playableQuiz, setPlayableQuiz] = useState<QuizData | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        if (arrayBuffer.byteLength <= 32) throw new Error("File is too small.");

        const saltBuffer = arrayBuffer.slice(0, 16);
        const ivBuffer = arrayBuffer.slice(16, 32);
        const ciphertextBuffer = arrayBuffer.slice(32);

        const salt = arrayBufferToWordArray(saltBuffer);
        const iv = arrayBufferToWordArray(ivBuffer);
        const ciphertext = arrayBufferToWordArray(ciphertextBuffer);

        const key = CryptoJS.PBKDF2(password, salt, {
          keySize: 256 / 32,
          iterations: 100000,
          hasher: CryptoJS.algo.SHA256,
        });

        const cipherParams = CryptoJS.lib.CipherParams.create({
          ciphertext: ciphertext,
        });

        const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        });

        const typedText = decrypted.toString(CryptoJS.enc.Utf8);
        if (!typedText) throw new Error("Incorrect password.");

        const cleanedText = typedText
          .replace(/^\uFEFF/, "")
          .replace(/\0/g, "")
          .trim();

        const rawCSharpQuiz = JSON.parse(cleanedText);

        // 1. Adapt to our interfaces
        const readyQuiz = adaptCSharpToReact(rawCSharpQuiz);

        // 2. Send the ready quiz to our server (API)
        fetch("/api/quizzes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(readyQuiz),
        })
          .then((res) => {
            if (!res.ok) throw new Error("Failed to save on the server.");

            window.location.href = `/quiz/${readyQuiz.categorySlug}`;
          })
          .catch((err) => {
            console.error(err);
            setError("Quiz decrypted, but failed to save.");
          });

        setPlayableQuiz(readyQuiz);
      } catch (err: any) {
        console.error(err);
        setError("Decryption error. Check your password.");
      }
    };

    reader.onerror = () => setError("Error reading file.");
    reader.readAsArrayBuffer(file);
  };

  if (playableQuiz) {
    return (
      <div className="min-h-screen bg-[#101010]">
        <QuizPlayer quiz={playableQuiz} category={playableQuiz.categorySlug} />
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#151515] border border-gray-800 rounded-xl max-w-md mx-auto text-white mt-10">
      <h2 className="text-xl font-bold mb-4">Upload Encrypted Quiz</h2>

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-[#27272A] border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 outline-none"
          placeholder="Enter password..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">
          File (.quiz):
        </label>
        <input
          type="file"
          onChange={handleFileUpload}
          disabled={!password}
          className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-500 cursor-pointer disabled:opacity-50"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-sm mb-4">
          {error}
        </div>
      )}
    </div>
  );
};
