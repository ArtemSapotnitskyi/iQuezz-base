import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center pt-40 pb-40">
      {/* Декоративні сітки */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-[url('/landing/hero/decore-up.svg')] bg-cover bg-bottom opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[url('/landing/hero/decore-down.svg')] bg-cover bg-top opacity-50"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px]  bg-purple-600/25 rounded-full blur-[140px] pointer-events-none -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[130px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Subsribe Badge */}
        <div className="flex items-center gap-3 bg-mist-900 px-5 py-2.5 rounded-xl hover:opacity-85 transition-opacity ease-in-out cursor-pointer">
          <Image
            src="/landing/hero/star-icon.svg"
            width={25}
            height={25}
            className="w-6 h-6 object-contain"
            alt="decore star"
          />
          <span className="text-md text-gray-300 font-bold">
            The ultimate quiz experience
          </span>
        </div>

        {/* Text Content */}
        <div className="pt-5 flex flex-col items-center">
          <h1 className="text-7xl font-bold tracking-tight">
            Learn, Quiz,{" "}
            <span className="bg-linear-to-br from-[#5813C1] to-[#C45037] bg-clip-text text-transparent">
              Earn Rewards
            </span>
          </h1>

          <p className="pt-5 text-xl text-gray-400 max-w-2xl px-5 pb-8 leading-relaxed">
            Join thousands of students and teachers on the ultimate quiz
            platform. Test your knowledge, compete with peers, and win exciting
            rewards
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="px-6 py-3 bg-linear-to-br from-[#5813C1] to-[#C45037] hover:opacity-90 transition-opacity rounded-lg font-bold text-lg text-white"
            >
              Get Started
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-white hover:bg-gray-100 hover:opacity-90 transition-opacity text-black rounded-lg font-bold text-lg"
            >
              Explore Quizzes
            </Link>
          </div>

          {/* Subsribers */}
          <div className="flex items-center gap-5 pt-12">
            <Image
              src="/landing/hero/decor-subsribers.svg"
              width={130}
              height={65}
              className="w-33 h-auto"
              alt="Subscribers avatars"
            />
            <p className="text-lg font-medium text-gray-300">
              <span className="text-purple-500 font-bold">5,000+</span> students
              joined this week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
