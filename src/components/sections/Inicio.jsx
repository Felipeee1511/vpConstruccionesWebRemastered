import Carousel from "../common/Carousel";
import Calidad from "./Calidad";
const Inicio = ({ id }) => {
  return (
    <section id={id} className="mt-4">
      <Calidad />
      <Carousel />
    </section>
  );
};

export default Inicio;
