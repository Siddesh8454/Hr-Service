import { useState } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Mail, Phone, User } from "lucide-react";
import kaivalyaPhoto from "../../assets/6784b1cd98fa59ec4dc6ed95f436939fff57bcdd.png";
import teamMember2 from "../../assets/16d1d82caf5b9427a45ca8dbfbc80ba02da4aa8f.png";

interface TeamMember {
  name: string;
  role: string;
  image: string | null;
  bio: string;
  email?: string;
  phone?: string;
  showIcon?: boolean;
}

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Kaivalya Barvekar",
      role: "CEO",
      image: kaivalyaPhoto,
      bio: "Kaivalya Barvekar leads KVSB Enterprises with a vision to simplify compliance for businesses in India. He ensures precision and integrity in every client engagement.",
      email: "kaivalyabarwekar@kvsbe.com",
      phone: "+91 96190 26579"
    },
    {
      name: "Pushpendu Rakshit",
      role: "Business Consultant",
      image: teamMember2,
      bio: "Bringing extensive professional expertise in business consulting, strategic planning, and operational excellence. Dedicated to helping businesses achieve their growth objectives through expert guidance and innovative solutions."
    },
    {
      name: "Vandana Barwekar",
      role: "Operation Manager",
      image: null,
      showIcon: true,
      bio: "Expert in operational management and business processes. Ensures smooth day-to-day operations and efficient workflow management across all business functions."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">Meet Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to delivering excellence in every engagement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                {member.image ? (
                  <>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-sm">Click to view details</span>
                    </div>
                  </>
                ) : (
                  <User className="text-blue-600" size={120} strokeWidth={1} />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg mb-1 text-gray-900">{member.name}</h3>
                <p className="text-sm text-blue-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Detail Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedMember?.name}</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
              {selectedMember?.image ? (
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              ) : (
                <User className="text-blue-600" size={200} strokeWidth={1} />
              )}
            </div>
            <div>
              <div className="mb-4">
                <p className="text-blue-600 mb-3">{selectedMember?.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedMember?.bio}</p>
              </div>
              <div className="space-y-3">
                {selectedMember?.email && (
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="text-blue-600" size={18} />
                    <a href={`mailto:${selectedMember.email}`} className="text-gray-600 hover:text-blue-600">
                      {selectedMember.email}
                    </a>
                  </div>
                )}
                {selectedMember?.phone && (
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="text-blue-600" size={18} />
                    <span className="text-gray-600">{selectedMember.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}