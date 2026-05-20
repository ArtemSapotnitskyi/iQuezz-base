import { Categories } from "@/features/landing/components/Categories";
import { Hero } from "@/features/landing/components/Hero";
import { Features } from "@/features/landing/components/Features";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Categories />
        <Features />
      </main>
    </div>
  );
}
