export default function Button({
  text = "texto",
  url = "#",
  external = false,
}) {
  return (
    <a
      href={url}
      target={external ? "_blank" : "_self"}
      className="py-3 px-6 bg-accent hover:bg-accentHover rounded-lg font-semibold"
    >
      {text}
    </a>
  );
}
