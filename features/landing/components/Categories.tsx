import Image from "next/image";
import { categoriesData } from "../data/categories.data";

export const Categories = () => {
  return (
    <section className="bg-[#0F0F11]">
      <div className="container mx-auto px-4 flex flex-col items-center text-center py-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1A191D] border border-gray-800 px-4 py-1.5 rounded-full hover:opacity-85 transition-opacity ease-in-out cursor-pointer mb-6">
          <Image
            src="/landing/hero/categories-icon.svg"
            width={25}
            height={25}
            alt="categories icon"
          />
          <span className="text-sm text-gray-300 font-medium">Categories</span>
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-5xl font-bold text-white mb-4 pt-6">
          Explore{" "}
          <span className="bg-gradient-to-r from-[#5A24D6] via-[#A03AA5] to-[#D95338] bg-clip-text text-transparent">
            Quiz Categories
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-xl md:text-lg font-light">
          Discover quizzes across various subjects to test and expand your
          knowledge
        </p>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-16 text-left">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className={`bg-[#1A191D] rounded-xl p-6 border-t-[3px] border-transparent flex gap-5 transition-transform hover:-translate-y-1 duration-300 ${category.borderClass}`}
            >
              {/* Іконка */}
              <div className="flex-shrink-0">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center bg-opacity-20 ${category.iconBgClass}`}
                >
                  <Image
                    src={category.icon}
                    alt={category.title}
                    className="w-10 h-auto"
                  />
                </div>
              </div>

              {/* Текст та Посилання */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {category.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <a
                  href="#"
                  className={`inline-flex items-center gap-2 font-medium text-sm hover:opacity-80 transition-opacity w-max ${category.linkTextClass}`}
                >
                  Explore Quizzes
                  <svg
                    className="w-4 h-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// bg-[#0F0F11]
