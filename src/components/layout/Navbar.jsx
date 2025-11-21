import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between text-white">
        <a href="#hero">
          <img src="./assets/logowhite.png" alt="Logo" className="w-20 no-drag" />
        </a>

        <button className="sm:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className="hidden sm:flex gap-10 text-lg">
          <a href="#hero" className="hover:opacity-80 transition">
            Inicio
          </a>
          <a href="#estilos" className="hover:opacity-80 transition">
            Estilos
          </a>
          <a href="#galeria" className="hover:opacity-80 transition">
            Galeria
          </a>
          <a href="#contacto" className="hover:opacity-80 transition">
            Contacto
          </a>
        </div>
      </div>

      <div
        className={`sm:hidden flex flex-col items-center gap-6 text-white text-lg pb-6 transition-all ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="#hero" onClick={() => setOpen(false)}>
          Inicio
        </a>
        <a href="#estilos" onClick={() => setOpen(false)}>
          Estilos
        </a>
        <a href="#contacto" onClick={() => setOpen(false)}>
          Contacto
        </a>
      </div>
    </nav>
  );
}
