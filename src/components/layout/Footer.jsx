import { socialIcons } from "../ui/icons";

const text = {
  title: "UN ESPACIO PARA TODOS LOS TIPOS DE ARTES CORPORALES",
};

export default function Footer() {
  return (
    <footer className="text-white flex flex-col items-center justify-center gap-8 px-6 py-16" id="contacto">
      <a href="#hero" className="hover:opacity-80 transition-opacity">
        <img src="./assets/logowhite.png" alt="Bailas Logo" className="w-32 sm:w-40" />
      </a>

      <h1 className="strike text-center text-lg sm:text-xl max-w-[40ch]">{text.title}</h1>

      <nav aria-label="Redes sociales">
        <ul className="flex flex-row gap-5">
          <li>
            <a href="https://www.instagram.com/estudiobailas/" className="p-2 hover:opacity-80 transition-opacity">
              {socialIcons.instagram}
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" className="p-2 hover:opacity-80 transition-opacity">
              {socialIcons.youtube}
            </a>
          </li>
          <li>
            <a href="https://tiktok.com/" className="p-2 hover:opacity-80 transition-opacity">
              {socialIcons.tiktok}
            </a>
          </li>
        </ul>
      </nav>

      <p className="text-gray-300 border-t border-white/20 w-full text-center pt-8 text-xs sm:text-sm">
        © 2025 Estudio Bailas
      </p>
    </footer>
  );
}
