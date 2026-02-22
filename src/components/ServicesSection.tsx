import { motion } from "framer-motion";
import serviceIdentidade from "@/assets/service-identidade.jpg";
import serviceMockups from "@/assets/service-mockups.jpg";
import serviceRotulos from "@/assets/service-rotulos.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceLanding from "@/assets/service-landing.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";

const services = [
  {
    image: serviceIdentidade,
    title: "Identidade Visual",
    description: "Logotipos, paleta de cores, tipografia e manual de marca que traduzem a essência do seu negócio.",
  },
  {
    image: serviceMockups,
    title: "Mockups",
    description: "Apresentações realistas e profissionais dos seus produtos e materiais de marca.",
  },
  {
    image: serviceRotulos,
    title: "Rótulos para Produtos",
    description: "Design de rótulos e embalagens que destacam seu produto nas prateleiras.",
  },
  {
    image: serviceSocial,
    title: "Social Media",
    description: "Posts estratégicos, carrosséis e conteúdos visuais que engajam e convertem.",
  },
  {
    image: serviceLanding,
    title: "Landing Pages",
    description: "Páginas de alta conversão com design persuasivo e responsivo.",
  },
  {
    image: serviceEcommerce,
    title: "E-Commerce",
    description: "Vitrines digitais que valorizam seus produtos e impulsionam vendas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-card relative">
      <div className="absolute inset-0 blue-glow-subtle pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            O que eu faço
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Meus <span className="text-gradient-blue">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
