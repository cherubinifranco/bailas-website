const text = {
  title: "Galería",
  subtitle: "Un vistazo a nuestros mejores momentos",
};

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative w-full py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center text-white text-center gap-4 mb-20 px-6">
        <h1 className="strike text-4xl">{text.title}</h1>
        <p className="text-lg opacity-90">{text.subtitle}</p>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-10 px-6">
        <img
          src="./assets/gallery1.png"
          className="w-64 sm:w-80 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 animate-float1"
        />
        <img
          src="./assets/gallery2.png"
          className="w-64 sm:w-80 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 animate-float2"
        />
        <img
          src="./assets/gallery3.png"
          className="w-64 sm:w-80 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 animate-float3"
        />
      </div>
    </section>
  );
}
