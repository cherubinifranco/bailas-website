import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-[1200px] mx-auto px-6 pt-4 flex items-center justify-between text-white">
        <a href="#hero">
          <img
            src="./assets/logowhite.png"
            alt="Logo"
            className="w-20 no-drag py-2"
          />
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
        className={`sm:hidden flex flex-col items-cente text-white text-lg pb-3 transition-all ${
          open ? "opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a
          href="#hero"
          className="w-full py-2 text-center"
          onClick={() => setOpen(false)}
        >
          Inicio
        </a>
        <a
          href="#estilos"
          className="w-full py-2 text-center"
          onClick={() => setOpen(false)}
        >
          Estilos
        </a>
        <a
          href="#galeria"
          className="w-full py-2 text-center"
          onClick={() => setOpen(false)}
        >
          Galeria
        </a>
        <a
          href="#contacto"
          className="w-full py-2 text-center"
          onClick={() => setOpen(false)}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
