import Carousel from "../common/Carousel";
import Calidad from "./Calidad";
import Intro from "./Intro";
import Seguridad from "./Seguridad";
const Inicio = ({ id }) => {
  return (
    <section id={id} className="">
      {/* <Intro/> */}
      <Calidad />
      <Carousel/>
      <Seguridad/>

    </section>
  );
};

export default Inicio;
