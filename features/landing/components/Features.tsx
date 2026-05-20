import Image from "next/image";
import { featuresData } from "../data/features.data";

export const Features = () => {
  return (
    <section className="border-b-gray-800  border-b">
      <div className="container mx-auto px-4 flex flex-col items-center pt-10">
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

        {/* Text-titles */}
        <div className="text-center">
          {/* Title */}
          <h2 className="text-5xl md:text-5xl font-bold text-white mb-4 pt-6">
            Why{" "}
            <span className="bg-gradient-to-r from-[#5A24D6] via-[#A03AA5] to-[#D95338] bg-clip-text text-transparent">
              Quizzy
            </span>
          </h2>
          {/* Subtitle */}
          <p className="text-gray-400 text-xl md:text-lg font-light">
            Discover quizzes across various subjects to test and expand your
            knowledge
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-16 text-left">
          {featuresData.map((category) => (
            <div
              key={category.id}
              className={`bg-[#151518] rounded-xl px-4 py-6 hover:opacity-85 transition-opacity ease-in-out `}
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-opacity-20 ${category.bgColorIcon}`}
                >
                  <Image
                    src={category.icon}
                    alt={category.description}
                    className="w-8 h-auto"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-xl">{category.title}</h4>
                <p className="text-gray-400 text-md leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AD baner */}
        <div className="w-full relative my-25 flex px-20 py-16 items-center bg-gradient-to-br from-[#5813C1] to-[#C45037] rounded-xl overflow-visible">
          {/* Text AD */}
          <div className="flex flex-col relative z-10">
            <h3 className="text-white text-5xl max-w-md font-bold mb-3 leading-tight">
              Ready to Start Your Quiz Journey?
            </h3>
            <p className="text-white/80 text-xl max-w-xl font-normal leading-relaxed mb-6">
              Join thousands of students and teachers. Sign up today and get
              access to all features
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-white text-black text-lg font-bold px-10 py-4 rounded-xl transition-colors hover:bg-white/90">
                Create Account
              </button>
              <button className="border border-white text-white text-lg font-bold px-10 py-4 rounded-xl transition-colors hover:bg-white/10">
                Explore Quizzes
              </button>
            </div>
          </div>

          {/* Icon AD */}
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <Image
              src="/landing/Features/ad-icon.svg"
              alt="Icon Decore"
              width={450}
              height={450}
              className="w-[550px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
