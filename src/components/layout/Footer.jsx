const text = {
  title: "UN ESPACIO PARA TODOS LOS TIPOS DE ARTES CORPORALES",
};
import { socialIcons } from "../ui/icons";
export default function Footer() {
  return (
    <footer className="text-white flex flex-col items-center justify-center gap-4">
      <a href="#hero">
        <img src="./assets/logowhite.png" alt="Bailas Logo" className="w-40" />
      </a>
      <h1 className="strike text-xl">{text.title}</h1>
      <div className="flex flex-row gap-4">
        <a href="https://www.instagram.com/estudiobailas/" className="p-1">
          {socialIcons.instagram}
        </a>
      </div>
      <h1 className="text-gray-300 border-t border-gray-300 w-full text-center py-6 text-sm">@2025 Estudio Bailas</h1>
    </footer>
  );
}
