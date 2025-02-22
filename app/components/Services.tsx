'use client';

import { motion } from 'framer-motion';
import { CheckBadgeIcon, GlobeAltIcon, NewspaperIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: CheckBadgeIcon,
    title: 'Social Media Account Verification',
    description: 'Enhance your credibility by getting verified with a blue tick on Instagram, Twitter, Facebook, and other social media platforms.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Professional Corporate Website',
    description: 'Strengthen your digital presence with modern design, fast performance, and mobile-friendly corporate websites.',
  },
  {
    icon: NewspaperIcon,
    title: 'Advertising on News Pages',
    description: 'We offer advertising solutions to highlight your brand on leading news sites and digital media platforms.',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Our Services</h2>
          <p className="text-accent max-w-2xl mx-auto">
            We provide professional solutions to strengthen your brand and increase your visibility in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-accent">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 