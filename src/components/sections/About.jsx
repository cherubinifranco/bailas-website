import { useCountUp } from "../../hooks/CountUp";

export default function About() {
  const alumnos = useCountUp(30);
  const anos = useCountUp(1);
  const festivales = useCountUp(5);

  return (
    <section className="bg-white py-36">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-around items-center">
        <img src="./assets/bboy.png" alt="" />

        <div className="flex flex-col gap-10">
          <div>
            <h1 className="strike text-4xl">ESTUDIO DE BAILE</h1>
            <h1 className="strike text-4xl">Danzas Urbanas para Todos</h1>
          </div>

          <p className="max-w-[45ch]">En nuestras clases vas a moverte, aprender y pasarla súper bien...</p>

          <div className="flex flex-row justify-around">
            <div className="bg-accent p-4 rounded-lg text-center">
              <p className="font-semibold text-4xl">+{alumnos}</p>
              <p>Alumnos</p>
            </div>

            <div className="bg-accent p-4 rounded-lg text-center">
              <p className="font-semibold text-4xl">+{anos} Año</p>
              <p>Creciendo</p>
            </div>

            <div className="bg-accent p-4 rounded-lg text-center">
              <p className="font-semibold text-4xl">+{festivales}</p>
              <p>Festivales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
