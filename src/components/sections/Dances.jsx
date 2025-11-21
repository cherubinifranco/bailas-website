const text = {
  title: "ESTILOS QUE TE MUEVEN",
  description:
    "Cuatro estilos. Cien formas de expresarte. Encontrá el ritmo que va con vos y animate a llevar tu baile al siguiente nivel.",
};

export default function Dances() {
  return (
    <section id="estilos" className="bg-black text-white py-28 px-6 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold strike mb-4">{text.title}</h1>

      <p className="text-center max-w-[60ch] opacity-80 mb-16">{text.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-[1000px] w-full">
        <div className="w-full aspect-square bg-gray-300"></div>
        <div className="w-full aspect-square bg-gray-300"></div>
        <div className="w-full aspect-square bg-gray-300"></div>
        <div className="w-full aspect-square bg-gray-300"></div>
      </div>
    </section>
  );
}
