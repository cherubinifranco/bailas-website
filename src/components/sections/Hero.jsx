import Button from "../ui/Button";

const text = {
  title: "Danzas Urbanas · Hip Hop · Reggaetón · Street Dance · Freestyle",
  subtitle: "Un espacio para divertirte, hacer amigos y aprender a bailar con onda.",
  cta: "Quiero Empezar",
};

const wspLink = `https://wa.me/3424360855?text=Hola 🙌🏻%0AQuería consultar por el estudio Bailas`

export default function Hero() {
  return (
    <main
      id="hero"
      className="h-screen w-full flex flex-col items-center justify-center text-white text-center gap-10 px-6"
    >
      <img
        src="./assets/logowhite.png"
        alt="Bailas Logo"
        className="w-80 no-drag drop-shadow-2xl"
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-[28ch]">
        {text.title}
      </h1>

      <h2 className="text-lg sm:text-xl opacity-90 max-w-[40ch]">
        {text.subtitle}
      </h2>

      <div className="text-black mt-4">
        <Button text={text.cta} url={wspLink} external={true} />
      </div>
    </main>
  );
}
