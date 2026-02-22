import { motion } from "framer-motion";
import { useState } from "react";
import serviceIdentidade from "@/assets/service-identidade.jpg";
import serviceMockups from "@/assets/service-mockups.jpg";
import serviceRotulos from "@/assets/service-rotulos.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceLanding from "@/assets/service-landing.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";

const categories = [
  { label: "Todos", value: "all" },
  { label: "Identidade Visual", value: "identidade" },
  { label: "Mockups", value: "mockups" },
  { label: "Rótulos", value: "rotulos" },
  { label: "Social Media", value: "social" },
  { label: "Landing Pages", value: "landing" },
  { label: "E-Commerce", value: "ecommerce" },
];

const portfolioItems = [
  { image: serviceIdentidade, title: "Identidade Visual — Branding Completo", category: "identidade" },
  { image: serviceMockups, title: "Mockups — Apresentação Profissional", category: "mockups" },
  { image: serviceRotulos, title: "Rótulos — Linha de Produtos", category: "rotulos" },
  { image: serviceSocial, title: "Social Media — Conteúdo Estratégico", category: "social" },
  { image: serviceLanding, title: "Landing Page — Design Persuasivo", category: "landing" },
  { image: serviceEcommerce, title: "E-Commerce — Vitrine Digital", category: "ecommerce" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 blue-glow-subtle pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Meus trabalhos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-blue">Portfólio</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.value
                  ? "gradient-blue-btn text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden glass-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-foreground font-semibold text-lg">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
