import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../../assets/dd8fdae25e94fcfb3f9190c2635746d3bbc3f44e.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-2">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="KVSB Logo" className="w-10 h-10" />
            <span className="font-serif text-base text-gray-900">KVSB Enterprises</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <button onClick={() => scrollToSection("home")} className="px-3 py-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors border-r border-gray-300">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="px-3 py-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors border-r border-gray-300">
              About Us
            </button>
            <button onClick={() => scrollToSection("services")} className="px-3 py-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors border-r border-gray-300">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="px-3 py-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors border-r border-gray-300">
              Our Team
            </button>
            <button onClick={() => scrollToSection("vision")} className="px-3 py-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors border-r border-gray-300">
              Vision & Mission
            </button>
            <button onClick={() => scrollToSection("contact")} className="px-3 py-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors border-r border-gray-300">
              Contact Us
            </button>
            <Button onClick={() => scrollToSection("enquiry")} className="ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm py-1.5 px-4">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
              About Us
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
              Our Team
            </button>
            <button onClick={() => scrollToSection("vision")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
              Vision & Mission
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
              Contact Us
            </button>
            <Button onClick={() => scrollToSection("enquiry")} className="bg-blue-600 hover:bg-blue-700 w-full">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}