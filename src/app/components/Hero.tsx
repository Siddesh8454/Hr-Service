import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import logo from "../../assets/dd8fdae25e94fcfb3f9190c2635746d3bbc3f44e.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Large Logo Section with Company Name and Registration */}
        <div className="hidden lg:flex items-center justify-between mb-8 py-4 px-6 bg-white/20 backdrop-blur-sm border-b border-gray-200">
          {/* Large Logo and Company Name */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="KVSB Logo" className="w-20 h-20" />
            <div>
              <h1 className="font-serif text-3xl text-gray-900">KVSB Enterprises</h1>
              <p className="text-sm text-gray-600 italic font-serif">Compliance Simplified, Growth Amplified</p>
            </div>
          </div>

          {/* Registration Numbers */}
          <div className="flex flex-col text-xs text-gray-700">
            <p><span className="font-medium">REG NO:</span> UDYAM-MH-19-0287688</p>
            <p><span className="font-medium">GSTIN:</span> 27HCPPB1389P1ZR</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="text-base text-gray-700 mb-8 leading-relaxed text-justify space-y-4">
              <p>
                <span className="font-semibold text-blue-700">KVSB Enterprises</span> is a <span className="text-blue-600">professional accounting and compliance consulting firm</span> dedicated to supporting businesses of all sizes—from <span className="font-medium">startups to established enterprises</span>—with comprehensive financial management and statutory compliance solutions.
              </p>
              <p>
                Built on principles of <span className="font-semibold text-gray-900">precision, integrity, and client-focused innovation</span>, the firm helps organizations navigate India's complex regulatory environment while ensuring <span className="text-blue-600">financial accuracy and reducing compliance risks</span>.
              </p>
              <p>
                Their services include <span className="font-medium">direct and indirect taxation (GST, TDS, and Income Tax), accounting, payroll management, labour law compliance, PF and ESI management, audits, financial reporting, and statutory filings</span>.
              </p>
              <p>
                Through expert guidance, proactive compliance strategies, and customized financial solutions, <span className="text-blue-700 font-semibold">KVSB Enterprises</span> enables businesses to <span className="text-green-700 font-medium">streamline operations, avoid penalties, improve efficiency, and focus on growth</span> while the firm manages the complexities of financial and regulatory responsibilities.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button onClick={() => scrollToSection("enquiry")} className="bg-blue-600 hover:bg-blue-700" size="lg">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button onClick={() => scrollToSection("services")} variant="outline" size="lg">
                Our Services
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-2xl text-blue-700 italic mb-4 font-serif">
              "Compliance Simplified, Growth Amplified"
            </p>
            <p className="text-lg text-gray-800 font-medium">
              <span className="text-blue-600">25+ years</span> of expertise in accounting, taxation, and compliance solutions
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}