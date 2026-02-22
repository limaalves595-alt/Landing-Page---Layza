import { motion } from "framer-motion";
import { Figma } from "lucide-react";

const skills = [
  { name: "Adobe Illustrator", icon: "Ai", color: "bg-[#FF9A00]/10 text-[#FF9A00] border-[#FF9A00]/20" },
  { name: "Photoshop", icon: "Ps", color: "bg-[#31A8FF]/10 text-[#31A8FF] border-[#31A8FF]/20" },
  { name: "Figma", icon: "figma", color: "bg-[#A259FF]/10 text-[#A259FF] border-[#A259FF]/20" },
  { name: "Canva", icon: "C", color: "bg-[#00C4CC]/10 text-[#00C4CC] border-[#00C4CC]/20" },
  { name: "CapCut", icon: "Cc", color: "bg-foreground/10 text-foreground border-border" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Sobre mim
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              6 anos transformando <span className="text-gradient-blue">marcas</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Designer gráfica com 6 anos de experiência em Identidade Visual, Branding e Logotipos.
              Especializada em Páginas Digitais, Banners, Mockups e conteúdos estratégicos para Social Media.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Formada em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Brasileiro (UNIBRA),
              combino conhecimento técnico com olhar criativo para entregar resultados que fazem a diferença.
            </p>

            <a
              href="https://wa.me/5581987284026"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-blue-btn text-primary-foreground font-semibold px-8 py-4 rounded-full inline-block text-base"
            >
              Solicite um orçamento
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Ferramentas</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`${skill.color} px-5 py-2.5 rounded-full text-sm font-medium border inline-flex items-center gap-2`}
                  >
                    {skill.icon === "figma" ? (
                      <Figma size={16} />
                    ) : (
                      <span className="font-bold text-xs">{skill.icon}</span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-gradient-blue">6+</p>
                  <p className="text-muted-foreground text-sm mt-1">Anos de experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient-blue">100+</p>
                  <p className="text-muted-foreground text-sm mt-1">Projetos entregues</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient-blue">50+</p>
                  <p className="text-muted-foreground text-sm mt-1">Clientes atendidos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
