'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-[300px] h-[300px] rounded-full overflow-hidden bg-white mx-auto"
          >
            <Image
              src="/vera.png"
              alt="Vera Digital Logo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="heading-secondary mb-6">
              Meet Vera Digital
            </h2>
            <p className="text-accent mb-6">
              Vera Digital is a company specialized in digital transformation and technology solutions, helping businesses succeed in the digital world.
            </p>
            <p className="text-accent mb-8">
              By utilizing modern technologies and innovative approaches, we empower our clients' digital assets and help them gain a competitive advantage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-accent">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-accent">Expert Team</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-accent">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 