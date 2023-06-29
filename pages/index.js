import ScrollEffect from "../src/components/ScrollEffect";
import Slider from "../src/components/Slider";
import MouseMoveEffect from "../src/components/MouseMoveEffect";
import ServiceComp from "../src/components/Service-comp";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <div id="main">
        <ScrollEffect />
        <Slider />
        <MouseMoveEffect />
        <ServiceComp />
      </div>
      <Footer />
    </>
  )
}
