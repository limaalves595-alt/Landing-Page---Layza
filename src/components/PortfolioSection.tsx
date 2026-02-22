import { motion } from "framer-motion";
import { useState } from "react";

import identidade01 from "@/assets/portfolio/identidade-01.jpg";
import mockup01 from "@/assets/portfolio/mockup-01.jpg";
import mockup02 from "@/assets/portfolio/mockup-02.jpg";
import mockup03 from "@/assets/portfolio/mockup-03.jpg";
import mockup04 from "@/assets/portfolio/mockup-04.jpg";
import rotulos01 from "@/assets/portfolio/rotulos-01.jpg";
import rotulos02 from "@/assets/portfolio/rotulos-02.jpg";
import social01 from "@/assets/portfolio/social-01.jpg";
import social02 from "@/assets/portfolio/social-02.jpg";
import landing01 from "@/assets/portfolio/landing-01.jpg";
import landing02 from "@/assets/portfolio/landing-02.jpg";
import ecommerce01 from "@/assets/portfolio/ecommerce-01.jpg";

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
  { image: identidade01, title: "Identidade Visual", category: "identidade" },

  { image: mockup01, title: "Mockup 01", category: "mockups" },
  { image: mockup02, title: "Mockup 02", category: "mockups" },
  { image: mockup03, title: "Mockup 03", category: "mockups" },
  { image: mockup04, title: "Mockup 04", category: "mockups" },

  { image: rotulos01, title: "Rótulo 01", category: "rotulos" },
  { image: rotulos02, title: "Rótulo 02", category: "rotulos" },

  { image: social01, title: "Social Media 01", category: "social" },
  { image: social02, title: "Social Media 02", category: "social" },

  { image: landing01, title: "Landing Page 01", category: "landing" },
  { image: landing02, title: "Landing Page 02", category: "landing" },

  { image: ecommerce01, title: "E-commerce", category: "ecommerce" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

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
              onClick={() => {
                setActive(item.category);
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="cursor-pointer group relative rounded-2xl overflow-hidden glass-card"
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
                <p className="text-foreground font-semibold text-lg">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;