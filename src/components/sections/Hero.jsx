import Button from "../ui/Button";

const text = {
  title: "Danzas Urbanas · Hip Hop · Reggaetón · Street Dance · Freestyle",
  subtitle: "Un espacio para divertirte, hacer amigos y aprender a bailar con onda.",
  cta: "Quiero Empezar",
};
export default function Hero() {
  return (
    <main className="flex flex-col items-center pt-40 gap-12 text-white pb-20">
      <img src="./assets/logowhite.png" alt="" className="no-drag" />
      <h1>{text.title}</h1>
      <h2 className="text-xl">{text.subtitle}</h2>
      <div className="text-black">
        <Button text={text.cta} url={"#"}/>
      </div>
    </main>
  );
}
