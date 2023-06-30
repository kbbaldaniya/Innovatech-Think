import ScrollEffect from "../src/components/ScrollEffect";
import Slider from "../src/components/Slider";
import MouseMoveEffect from "../src/components/MouseMoveEffect";
import FlipCard from "../src/components/common/FlipCard";
import Footer from "../src/components/Footer";
import CardSwiper from "../src/components/common/CardSwiper";
import VerticleSwiper from "../src/components/common/VerticleSwiper";

export default function Home() {
  return (
    <>
      <div id="main" className="mainSwiper">
        <ScrollEffect />
        <Slider />
        <MouseMoveEffect />
        <CardSwiper />
        <FlipCard />
        {/* <VerticleSwiper /> */}
      </div>
      <Footer />
    </>
  )
}
