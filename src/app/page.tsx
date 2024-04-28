import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoosUs from "@/components/WhyChoosUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased">
        <HeroSection />
        <FeaturedCourses />
        <WhyChoosUs />
        <TestimonialsCards />
        <UpcomingWebinars />
        <Instructors />
        <Footer />
      </main>
    </>
  );
}
