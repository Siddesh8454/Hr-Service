import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { VisionMission } from "./components/VisionMission";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { EnquiryForm } from "./components/EnquiryForm";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Team />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
