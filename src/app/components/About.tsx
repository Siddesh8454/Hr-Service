import { motion } from "motion/react";
import { Award, Target, Shield, TrendingUp } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Experienced professionals dedicated to delivering excellence in HR and accounting services"
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Tailored solutions designed to meet your unique business requirements"
    },
    {
      icon: Shield,
      title: "Compliance Assured",
      description: "Stay compliant with all regulatory requirements and industry standards"
    },
    {
      icon: TrendingUp,
      title: "Growth Oriented",
      description: "Strategic solutions that drive business growth and operational efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">About Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            KVSB Enterprises stands as a premier accounting and compliance consulting firm, committed to empowering businesses across all scales—from startups to established enterprises.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-4 text-gray-900 text-center">Our Expertise</h3>
            <p className="text-gray-600 mb-6">
              Founded on principles of precision, integrity, and client-centric innovation, we guide organizations through the complexities of India's evolving regulatory landscape. Our mission is clear: to ensure financial accuracy, mitigate compliance risks, and unlock pathways for sustainable growth.
            </p>
            <p className="text-gray-600 mb-6">
              Our seasoned experts bring unparalleled proficiency in key areas such as direct and indirect taxation, advanced accounting standards, labour law compliance, and HR management. Whether you're a small business owner streamlining operations or a growing company scaling ambitiously, we provide actionable strategies that align with your goals.
            </p>
            <p className="text-gray-600">
              Rely on KVSB Enterprises to transform regulatory hurdles into strategic advantages, fostering resilience and prosperity in your business journey.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-blue-600" size={32} />
              </div>
              <h4 className="text-lg mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
