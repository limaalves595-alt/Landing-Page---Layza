import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold">
          Layza <span className="text-gradient-blue">Saynara</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5581987284026"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-blue-btn text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-sm"
          >
            Orçamento
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5581987284026"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-blue-btn text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-sm inline-block mt-2"
          >
            Orçamento
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
