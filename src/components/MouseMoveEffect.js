import React, { useEffect } from 'react'
import Title from './common/Title';

const MouseMoveEffect = () => {

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;

    function parallax(e) {
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = x;
    }
  }, [])

  return (
    <div id='parallax-frame'>
      <div> Chips </div>
      <div id="parallax"></div>
    </div>
  )
}

export default MouseMoveEffect
