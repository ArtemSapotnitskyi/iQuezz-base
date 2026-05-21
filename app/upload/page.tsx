import React from "react";
import { QuizUploader } from "@/components/QuizUploader/QuizUploader";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#101010] py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Upload panel
        </h1>
        <QuizUploader />
      </div>
    </div>
  );
}
