import Header from "@/componants/Home/Header";
import Navbar from "@/componants/Layouts/Navbar";
import About from "@/componants/Home/About";
import Services from "@/componants/Home/Services";
import EducatioEX from "@/componants/Home/EducatioEX";
import Footer from "@/componants/Layouts/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <EducatioEX />
      <Footer />
    </div>
  );
}
