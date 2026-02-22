import { motion } from "framer-motion";
import layzaPhoto from "@/assets/layza-photo.png";
import { Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Minimal blue lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 pl-2">
  Designer Gráfica
</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] mb-6">
              Layza{" "}
              <span className="text-gradient-blue">Saynara</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-xl mb-10 leading-relaxed">
              Especialista em identidades visuais, mockups, rótulos, social media, landing pages e e-commerce.
              Transformo ideias em designs que conectam e vendem.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
  href="#portfolio"
  className="gradient-blue-btn text-primary-foreground font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 text-base"
>
  Ver meu portfólio
</a>
              <a
                href="https://instagram.com/layzasaynaradesign"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary/40 text-foreground font-medium px-10 py-5 rounded-full inline-flex items-center gap-2 hover:bg-primary/10 transition-colors text-lg"
              >
                <Instagram size={22} /> @layzasaynaradesign
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-primary/15 blur-3xl" />
              <img
                src={layzaPhoto}
                alt="Layza Saynara - Designer Gráfica"
                className="relative rounded-3xl w-[540px] h-[660px] object-cover object-top border-2 border-primary/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
