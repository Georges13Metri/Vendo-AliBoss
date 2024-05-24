import Contactus from "@/components/Contact/Contactus";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Contactus />
      <ScrollToTopButton />
    </div>
  );
}
