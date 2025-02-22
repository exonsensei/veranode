'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Marka Lansmanı',
    description: 'Yeni bir markanın pazara başarılı girişi için kapsamlı PR ve medya stratejisi.',
    image: '/projects/brand-launch.jpg',
    category: 'PR Kampanyası',
  },
  {
    title: 'Dijital Dönüşüm',
    description: 'Kurumsal markanın dijital medyada konumlandırılması ve itibar yönetimi.',
    image: '/projects/digital.jpg',
    category: 'Dijital PR',
  },
  {
    title: 'Etkinlik Yönetimi',
    description: 'Uluslararası basın toplantısı ve lansman etkinliği organizasyonu.',
    image: '/projects/event.jpg',
    category: 'Etkinlik',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Projelerimiz</h2>
          <p className="text-accent max-w-2xl mx-auto">
            Her proje benzersizdir ve özel ilgi gerektirir. İşte başarıyla tamamladığımız bazı çalışmalarımız.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-accent">{project.description}</p>
              </div>
              <motion.div
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-center p-6"
              >
                <button className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors">
                  Detayları Gör
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 