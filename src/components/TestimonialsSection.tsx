import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laynne Diniz",
    role: "Empreendedora",
    text: "Meu Deuss! Era assim que eu queria! Eu ameeei! Show de bola, ficou perfeito!",
    stars: 5,
  },
  {
    name: "Samuel Silva",
    role: "CEO - Memorativa Professional",
    text: "Os rótulos ficaram incríveis! Meus produtos nunca tiveram tanta presença nas prateleiras. Super recomendo!",
    stars: 5,
  },
  {
    name: "Joggy",
    role: "Muscle Rub",
    text: "Curti demais os banners do site, era exatamente o que eu queria.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card relative">
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
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            O que meus <span className="text-gradient-blue">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
