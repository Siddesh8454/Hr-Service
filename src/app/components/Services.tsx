import { motion } from "motion/react";
import { ClipboardCheck, FileText, Calculator, Users, Briefcase, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import teamImage from "../../assets/0e3f89d607d71bf9d67107e3ca5faddcf821fe52.png";

export function Services() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Statutory Compliance Management",
      description: "Statutory Compliance Management",
      details: [
        "PF (Provident Fund) Compliance: Employee retirement benefit administration and regulatory filing",
        "ESI (Employee State Insurance) Compliance: Employee welfare scheme management and statutory submissions",
        "PT (Professional Tax) Compliance: State-level professional tax calculations and timely filings",
        "MLWF (Maharashtra Labour Welfare Fund) Compliance: MLWF deduction refers to the mandatory contribution to the Maharashtra Labour Welfare Fund (MLWF)",
        "TDS (Tax Deducted at Source) Compliance: Accurate TDS calculations, filing, and quarterly returns"
      ]
    },
    {
      icon: FileText,
      title: "GST Services",
      description: "Comprehensive Goods and Service Tax management",
      details: [
        "GST Registration and Compliance management",
        "GST Return Filing and reconciliation",
        "GST Audit and Compliance review",
        "GST Consultancy for complex transactions and RCM (Reverse Charge Mechanisms)"
      ]
    },
    {
      icon: Calculator,
      title: "Accounting & Financial Management",
      description: "Precise financial record maintenance and reporting",
      details: [
        "Full accounting service delivery",
        "Account management and record maintenance",
        "Financial reporting and statements preparation",
        "Tally Software implementation and management",
        "End-to-end bookkeeping solutions"
      ]
    },
    {
      icon: Users,
      title: "Salary & Payroll Services",
      description: "Efficient payroll processing and statutory adherence",
      details: [
        "Third-party payroll management",
        "Salary preparation and processing",
        "Statutory deduction calculations",
        "Payroll compliance and documentation"
      ]
    },
    {
      icon: Briefcase,
      title: "Audit Services",
      description: "Ensuring financial accuracy and regulatory compliance",
      details: [
        "Statutory and internal audit support",
        "Audit trail management",
        "Financial statement review",
        "Compliance audit recommendations"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive HR and accounting solutions designed to streamline your business operations
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Services Accordion - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 bg-white hover:shadow-lg transition-shadow">
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="text-blue-600" size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6">
                        <div className="ml-16 space-y-3">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <ChevronRight className="text-blue-600 flex-shrink-0 mt-1" size={16} />
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            {/* Team Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32 self-start"
            >
              <img 
                src={teamImage} 
                alt="Expert Team Delivering Excellence in HR & Accounting Services" 
                className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}