import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-6 border-b-gray-800  border-b">
      <nav className="container flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">
            <Link
              href="/"
              className="bg-linear-to-br border border-solid rounded-lg from-[#5813C1] to-[#C45037] bg-clip-text text-transparent"
            >
              Quizzy
            </Link>
          </h2>
        </div>
        <ul className="flex gap-7">
          <li className="text-base">
            <Link
              href="/"
              className="px-4 py-3 font-medium  border-solid rounded-lg hover:bg-white hover:text-black transition-colors ease-in-out"
            >
              Quiz
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/"
              className="px-4 py-3 font-medium  border-solid rounded-lg hover:bg-white hover:text-black transition-colors ease-in-out"
            >
              Weekly Quiz
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/"
              className="px-4 py-3 font-medium  border-solid rounded-lg hover:bg-white hover:text-black transition-colors ease-in-out"
            >
              Rewards
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/"
              className="px-4 py-3 font-medium  border-solid rounded-lg hover:bg-white hover:text-black transition-colors ease-in-out"
            >
              About
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <button>
            <Link
              href="/"
              className="px-4 py-3 bg-white text-black rounded-lg font-light"
            >
              Sign in
            </Link>
          </button>
          <button>
            <Link
              href="/"
              className="px-4 py-3 bg-linear-to-br from-[#5813C1] to-[#C45037] rounded-lg font-light"
            >
              Register
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};
