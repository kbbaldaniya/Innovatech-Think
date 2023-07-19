import Slider from "../src/components/Slider";
import MouseMoveEffect from "../src/components/MouseMoveEffect";
import FlipCard from "../src/components/common/FlipCard";
import Footer from "../src/components/Footer";
import CardSwiper from "../src/components/common/CardSwiper";
import VerticleSwiper from "../src/components/common/VerticleSwiper";
import Stepper from "../src/components/common/Stepper";
import GSAPScroll from "../src/components/GSAPScroll";

export default function Home() {
  return (
    <>
      <div id="main" className="mainSwiper">
        <GSAPScroll />
        <Slider />
        <MouseMoveEffect />
        <CardSwiper />
        <FlipCard />
        <VerticleSwiper />
        <Stepper />
      </div>
      <Footer />
    </>
  )
}
