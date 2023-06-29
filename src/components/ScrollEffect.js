import { useEffect } from "react";

const ScrollEffect = () => {
  useEffect(() =>
    window.addEventListener("scroll", () => {
      document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    },
      false
    ))

  return (
    <div id='scrollEffect'>
      <div className="loading">
        <h1>Scroll Down</h1>
        <center className="down">
          <div className="ball3"></div>
          <div className="spacer"></div>
          <div className="ball2"></div>
          <div className="spacer"></div>
          <div className="ball1"></div>
          <div className="arrow"></div>
        </center>
      </div>
      <svg className="logo" width="100" height="100" viewBox="0 0 24 24">
        <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
      </svg>
      <h2 className="heading-1">Exciting things are happening behind the scenes!</h2>
      <h3 className="heading-2">Our site is currently under creation and will be ready soon.</h3>
    </div>
  )
}

export default ScrollEffect
