import HeroSection from "@/components/HeroSection";
import HomeCardSection from "@/components/HomeCardSection";
import HomeMarquee from "@/components/HomeMarquee";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1800px] mx-auto px-4 mt-20">
      <HeroSection></HeroSection>
      <HomeCardSection></HomeCardSection>
      </div>

      <Testimonial></Testimonial>
      <HomeMarquee></HomeMarquee>
    </main>
  );
}
