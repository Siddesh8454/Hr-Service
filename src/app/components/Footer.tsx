import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import logo from "../../assets/dd8fdae25e94fcfb3f9190c2635746d3bbc3f44e.png";

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="KVSB Logo" className="w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg">KVSB Enterprises</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 italic">
                Compliance Simplified, Growth Amplified
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Your trusted partner in accounting, taxation, and statutory compliance, committed to helping businesses thrive.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="https://www.facebook.com/share/18C1mMd1wu/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="https://www.instagram.com/kvsb_enterprises?igsh=MWtoa3pjcWt0YmVoeg==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("team")} className="hover:text-white transition-colors">
                    Our Team
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("vision")} className="hover:text-white transition-colors">
                    Vision & Mission
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Statutory Compliance</li>
                <li className="hover:text-white transition-colors cursor-pointer">GST Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">Accounting & Finance</li>
                <li className="hover:text-white transition-colors cursor-pointer">Salary & Payroll</li>
                <li className="hover:text-white transition-colors cursor-pointer">Audit Services</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="flex-shrink-0 mt-1" size={16} />
                  <span>MIDC Taloja, Thane</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="flex-shrink-0 mt-1" size={16} />
                  <a href="mailto:contactus@kvsbe.com" className="hover:text-white transition-colors">
                    contactus@kvsbe.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="flex-shrink-0 mt-1" size={16} />
                  <span>+91 96190 26579</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 KVSB Enterprises. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => setShowTerms(true)} className="hover:text-white transition-colors">
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Dialog */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-600">
            <p className="text-sm">Last Updated: February 16, 2026</p>
            
            <div>
              <h3 className="text-lg text-gray-900 mb-2">1. Information We Collect</h3>
              <p className="text-sm">
                At KVSB Enterprises, we collect information that you provide directly to us when you use our services, including but not limited to your name, email address, phone number, company information, and any other details you choose to provide.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">2. How We Use Your Information</h3>
              <p className="text-sm mb-2">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Process your requests and enquiries</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">3. Information Sharing and Disclosure</h3>
              <p className="text-sm">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, conducting our services, or servicing you, as long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">4. Data Security</h3>
              <p className="text-sm">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">5. Your Rights</h3>
              <p className="text-sm">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at contactus@kvsbe.com.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">6. Contact Us</h3>
              <p className="text-sm">
                If you have any questions about this Privacy Policy, please contact us at contactus@kvsbe.com or at our office address: 1005, Taloja MIDC, Thane.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms & Conditions Dialog */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Terms & Conditions</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-600">
            <p className="text-sm">Last Updated: January 4, 2026</p>
            
            <div>
              <h3 className="text-lg text-gray-900 mb-2">1. Acceptance of Terms</h3>
              <p className="text-sm">
                By accessing and using the services of KVSB Enterprises, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">2. Services Provided</h3>
              <p className="text-sm">
                KVSB Enterprises provides accounting, taxation, statutory compliance, wealth management, and related business consulting services. The specific scope of services will be defined in individual service agreements with clients.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">3. Client Responsibilities</h3>
              <p className="text-sm mb-2">Clients agree to:</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Make timely payments as per the agreed terms</li>
                <li>Cooperate with our team in the execution of services</li>
                <li>Inform us of any changes that may affect service delivery</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">4. Confidentiality</h3>
              <p className="text-sm">
                We maintain strict confidentiality of all client information and data. Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the business relationship.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">5. Payment Terms</h3>
              <p className="text-sm">
                Payment terms will be specified in individual service agreements. Generally, payments are due as per the agreed schedule. Late payments may be subject to additional charges.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">6. Limitation of Liability</h3>
              <p className="text-sm">
                While we strive to provide accurate and timely services, KVSB Enterprises shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">7. Termination</h3>
              <p className="text-sm">
                Either party may terminate the service agreement with appropriate notice as specified in the individual service contract. Outstanding obligations must be fulfilled upon termination.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">8. Governing Law</h3>
              <p className="text-sm">
                These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of courts in Thane, Maharashtra.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-2">9. Contact Information</h3>
              <p className="text-sm">
                For any questions regarding these Terms & Conditions, please contact us at contactus@kvsbe.com or at our office address: 1005, Taloja MIDC, Thane.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}