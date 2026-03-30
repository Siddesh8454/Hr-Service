import { motion } from "motion/react";
import { Eye, Rocket } from "lucide-react";

export function VisionMission() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Vision & Mission</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted, tech-enabled Financial Management Solution Provider
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Rocket className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">Our Mission</h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                <span className="font-medium">1.</span> To be the most trusted, tech-enabled Financial management Solution provider for all size of businesses and individuals, delivering end-to-end accounting, taxation, Compliance and wealth management solutions that build long-term financial security and peace of mind.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">2.</span> To simplify finance, taxation, and compliance for clients by providing accurate, timely, and insightful services in accounting, GST (Goods and Service Tax), Income Tax, TDS (Tax Deduction at Source), and wealth management, supported by strong processes, ethical practice, and a relationship-driven approach.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}