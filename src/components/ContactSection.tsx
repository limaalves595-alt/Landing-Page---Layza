import { motion } from "framer-motion";
import { Instagram, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Vamos conversar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para criar o <span className="text-gradient-blue">seu projeto?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Entre em contato e vamos transformar sua ideia em realidade visual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/5581987284026"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-blue-btn text-primary-foreground font-semibold px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-base"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
            <a
              href="https://instagram.com/layzasaynaradesign"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/40 text-foreground font-medium px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors text-base"
            >
              <Instagram size={20} /> @layzasaynaradesign
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone size={16} />
            <span>+55 81 98728-4026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
