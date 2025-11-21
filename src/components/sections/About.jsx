const text = {
  title: "ESTUDIO DE BAILE",
  title2: "Danzas Urbanas para Todos",
  p: "En nuestras clases vas a moverte, aprender y pasarla súper bien. Trabajamos con chicos y chicas de todas las edades, desde principiantes hasta avanzados.",
};

export default function About() {
  return (
    <main className="bg-white py-36">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-around items-center">
        <img src="./assets/bboy.png" className="" alt="" />
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="strike text-4xl">{text.title}</h1>
            <h1 className="strike text-4xl">{text.title2}</h1>
          </div>
          <p className="max-w-[45ch]">{text.p}</p>
          <div className="flex flex-row justify-around">
            <div className="bg-accent p-4 rounded-lg text-center">
              <p className="font-semibold text-4xl">+30</p>
              <p>Alumnos</p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-center">
              <p className="font-semibold text-4xl">+1 Año</p>
              <p>Creciendo</p>
            </div>
            <div className="bg-accent p-4 rounded-lg text-center">
              <p className="font-semibold text-4xl">+5</p>
              <p>Festivales</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
