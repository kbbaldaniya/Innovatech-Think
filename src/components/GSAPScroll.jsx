import React, { useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dashboard from '../assets/3dImage/dashboard.png'
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const GSAPScroll = () => {

  useEffect(() => {
    gsap.registerPlugin("ScrollTrigger");

    let scene = gsap.timeline();
    let intro_tl = gsap.timeline();
    let part1_tl = gsap.timeline();
    let part2_tl = gsap.timeline();
    let part3_tl = gsap.timeline();
    let part4_tl = gsap.timeline();
    let part5_tl = gsap.timeline();
    let outro_tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: "#container",
      pin: true,
      start: "top top",
      end: "+=5700"
    });
    gsap.set("#logo", {
      x: 270,
    });
    gsap.set(".specs", {
      x: -300,
      opacity: 0
    });
    gsap.set(".chars", {
      x: 300
    });
    part2_tl.set(".models li", {
      opacity: 0
    });
    part3_tl.set(".specs dt", {
      opacity: 0
    });
    part3_tl.set(".specs dd", {
      opacity: 0
    });
    part4_tl.set(".chars h2", {
      opacity: 0
    });
    part4_tl.set(".chars dt", {
      opacity: 0
    });
    part4_tl.set(".chars dd", {
      opacity: 0
    });

    // TIMELINE: Intro
    intro_tl
      .fromTo(
        "#wrapWin",
        {
          height: 80
        },
        {
          height: 800,
          duration: 0.1
        }
      )
      .fromTo(
        "#liberty",
        {
          scale: 0.8,
          y: -200
        },
        {
          scale: 1,
          y: 150,
          duration: 0.1
        }
      )
      .to("#logo", {
        scrollTrigger: {
          start: 300,
          end: 500,
          scrub: 0.5
        },
        y: -160,
        scale: 0.6,
        duration: 0.6,
        ease: "expo.out"
      })
      .to("#intro-h1", {
        scrollTrigger: {
          start: 500,
          end: 700,
          scrub: 0.5
        },
        scale: 0,
        duration: 0.6,
        ease: "expo.out"
      })
      .to("#intro-h3", {
        scrollTrigger: {
          start: 550,
          end: 750,
          scrub: 0.5
        },
        scale: 0,
        duration: 0.6,
        ease: "expo.out"
      });

    // TIMELINE: Part 1
    part1_tl
      .fromTo(
        "#liberty",
        {
          scale: 1,
          y: 150
        },
        {
          scale: 0.8,
          y: -200,
          duration: 1,
          ease: "sine.out",
          scrollTrigger: {
            start: 1000,
            end: 1200,
            scrub: 0.5
          }
        }
      )
      .from(".models li", {
        scrollTrigger: {
          start: 1250,
          end: 1450,
          scrub: 1
        },
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.3,
        ease: "sine.out"
      })

    // TIMELINE: Part 2
    part2_tl
      .fromTo(
        ".models li",
        {
          x: -80,
          opacity: 1
        },
        {
          x: -100,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "sine.out",
          scrollTrigger: {
            start: 2000,
            end: 2200,
            scrub: 1
          }
        }
      )

    // TIMELINE: Part 3
    part3_tl
      .fromTo(
        "#wrapWin",
        {
          height: 800
        },
        {
          scrollTrigger: {
            start: 2500,
            end: 2700,
            scrub: 1
          },
          height: 80,
          duration: 2,
          ease: "sine.out"
        }
      )
      .fromTo("#liberty", {
        x: 100
      }, {
        scrollTrigger: {
          start: 2600,
          end: 2800,
          scrub: 1
        },
        x: 320,
        duration: 2,
        ease: "sine.out"
      })
      .to(".specs", {
        scrollTrigger: {
          start: 2600,
          end: 2800,
          scrub: 1
        },
        opacity: 1,
        duration: 2,
        ease: "sine.out"
      })
      .from(".specs h2", {
        duration: 1,
        opacity: 0,
        x: -30,
        scrollTrigger: {
          start: 2600,
          end: 2800,
          scrub: 1
        }
      })
      .from(".specs dt", {
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        x: -30,
        scrollTrigger: {
          start: 2600,
          end: 2800,
          scrub: 2
        }
      })
      .from(
        ".specs dd",
        {
          duration: 1,
          opacity: 0,
          stagger: 0.3,
          x: -30,
          scrollTrigger: {
            start: 2600,
            end: 2800,
            scrub: 2
          }
        },
        "-=.5"
      )
      .from(
        ".specs dd",
        {
          duration: 1,
          opacity: 1,
          stagger: 0.3,
          x: 0,
          scrollTrigger: {
            start: 3200,
            end: 3400,
            scrub: 1
          }
        },
        "-=.5"
      )
      .from(".specs dt", {
        duration: 1,
        opacity: 1,
        stagger: 0.3,
        x: 0,
        scrollTrigger: {
          start: 3200,
          end: 3400,
          scrub: 1
        }
      })
      .from(".specs h2", {
        duration: 1,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          start: 3200,
          end: 3400,
          scrub: 1
        }
      })
      .fromTo(
        "#liberty",
        {
          x: 320
        },
        {
          scrollTrigger: {
            start: 3500,
            end: 3800,
            scrub: 1
          },
          x: -300,
          duration: 3,
          ease: "sine.out"
        }
      );

    // TIMELINE: Part 4
    part4_tl
      .from(".chars h2", {
        duration: 1,
        opacity: 0,
        x: 30,
        scrollTrigger: {
          start: 3800,
          end: 4000,
          scrub: 1
        }
      })
      .from(".chars dt", {
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        x: 30,
        scrollTrigger: {
          start: 3800,
          end: 4000,
          scrub: 2
        }
      })
      .from(
        ".chars dd",
        {
          duration: 1,
          opacity: 0,
          stagger: 0.3,
          x: 30,
          scrollTrigger: {
            start: 3800,
            end: 4000,
            scrub: 2
          }
        },
        "-=.5"
      );

    // TIMELINE: Part 5
    part5_tl
      .fromTo(
        ".chars h2",
        {
          opacity: 1,
          x: 0
        },
        {
          duration: 1,
          opacity: 0,
          x: 30,
          scrollTrigger: {
            start: 4200,
            end: 4400,
            scrub: 1
          }
        }
      )
      .fromTo(
        ".chars dt",
        {
          opacity: 1,
          x: 0
        },
        {
          duration: 1,
          opacity: 0,
          stagger: 0.3,
          x: 30,
          scrollTrigger: {
            start: 4200,
            end: 4400,
            scrub: 2
          }
        }
      )
      .fromTo(
        ".chars dd",
        {
          opacity: 1,
          x: 0
        },
        {
          duration: 1,
          opacity: 0,
          stagger: 0.3,
          x: 30,
          scrollTrigger: {
            start: 4200,
            end: 4400,
            scrub: 2
          }
        },
        "-=.5"
      )
      .fromTo(
        "#liberty",
        {
          x: -300
        },
        {
          scrollTrigger: {
            start: 4400,
            end: 4600,
            scrub: 1
          },
          x: 100,
          duration: 3,
          ease: "sine.out"
        }
      );

    // TIMELINE: Outro
    outro_tl
      .fromTo(
        "#wrapWin",
        {
          height: 80
        },
        {
          scrollTrigger: {
            start: 5000,
            end: 5200,
            scrub: 1
          },
          height: 800,
          duration: 2,
          ease: "sine.out"
        }
      )
      .fromTo(
        "#liberty",
        {
          scale: 0.8,
          y: -200
        },
        {
          scrollTrigger: {
            start: 5200,
            end: 5400,
            scrub: 1
          },
          // x: 0,
          scale: 0.7,
          y: -280,
          duration: 3,
          ease: "sine.out"
        }
      )
      .fromTo(".outro h2",{ opacity: 0 }, {
        scrollTrigger: {
          start: 5300,
          end: 5400,
          scrub: 1
        },
        duration: 1,
        y: 30,
        opacity: 1
      })
      .fromTo(".outro button",{ opacity: 0 }, {
        scrollTrigger: {
          start: 5500,
          end: 5600,
          scrub: 1
        },
        duration: 1,
        y: 30,
        opacity: 1
      });

    // TIMELINE: Main
    scene
      .set("#liberty", {
        x: 100
      })
      .add(intro_tl)
      .add(part1_tl)
      .add(part2_tl)
      .add(part3_tl)
      .add(part4_tl)
      .add(part5_tl)
      .add(outro_tl);
  }, []);

  return (
    <div class="container" id="container">
      <div class="wrapper" id="wrapper">
        <div class="panel">
          <div class="intro" id="intro">
            <img id="logo" src="https://www.sicontis.com/codepen/cpc-gsap-scroll/piaggio-logo.svg" alt="piaggio logo svg" />
            <h1 id="intro-h1">Ready to Cruise</h1>
            <h3 id="intro-h3">Relax and enjoy the ride</h3>
          </div>
          <Image id="liberty" src={dashboard} alt="liberty 150 png" />
          <ul class="models">
            <li>Liberty 50</li>
            <li>Liberty 150</li>
            <li>Liberty 150 Sport</li>
          </ul>
          <div class="specs">
            <h2>Engine</h2>
            <dl>
              <dt>Bore x Stroke</dt>
              <dd>58mm x 58.6mm</dd>

              <dt>Clutch</dt>
              <dd>Automatic centrifugal dry clutch</dd>

              <dt>Consumption</dt>
              <dd>36.8 Km/I (WMTC cycle)</dd>

              <dt>Cooling</dt>
              <dd>Air</dd>

              <dt>CO2 Emissions</dt>
              <dd>65 g/Km</dd>

              <dt>Distribution</dt>
              <dd>Single overhead camshaft, 3 valves (2 input, 1 output)</dd>

              <dt>Engine</dt>
              <dd>Single cylinder 4-stroke -i-get</dd>
            </dl>
            <dl>
              <dt>Engine Capacity</dt>
              <dd>155c</dd>

              <dt>Fuel system</dt>
              <dd>Electronic injection</dd>

              <dt>Lubrication</dt>
              <dd>Oil with wet sump</dd>

              <dt>Max Power</dt>
              <dd>12.9hp (9.6kW) @ 7,750 rpm</dd>

              <dt>Max Torque</dt>
              <dd>9.58 ft-lbs (13 Nm) @ 5250 rpm</dd>

              <dt>Transmission</dt>
              <dd>Automatic CVT</dd>

              <dt>Starter</dt>
              <dd>Electric</dd>
            </dl>
          </div>
          <div class="chars">
            <h2>Characteristics</h2>
            <dl>
              <dt>Frame</dt>
              <dd>High resistance tubular steel</dd>

              <dt>Front tyre</dt>
              <dd>Tubeless 90/80 - 16", 51J</dd>

              <dt>Rear brake</dt>
              <dd>Tamburo 140mm</dd>

              <dt>Seat height</dt>
              <dd>31.1" (790mm)</dd>

              <dt>Front suspension</dt>
              <dd>Telescopic hydraulic fork, 76mm stroke</dd>

              <dt>Rear tyre</dt>
              <dd>Tubeless 100/80 - 14", 54J</dd>

              <dt>ABS</dt>
              <dd>Front wheel standard ABS</dd>
            </dl>
            <dl>
              <dt>Fuel Tank Capacity</dt>
              <dd>1.58 gal (6 liters)</dd>

              <dt>Rear suspension</dt>
              <dd>Single hydraulic shock absorber with 5-position preload adjustment</dd>

              <dt>Front brake</dt>
              <dd>Single disk 240mm</dd>

              <dt>Length/Width/Wheelbase</dt>
              <dd>76.5" / 27.1" / 52.7"</dd>

              <dt>Emission compliance</dt>
              <dd>EPA, CARB, Transport Canada</dd>
            </dl>
          </div>
          <div class="outro">
            <h2>Piaggio Liberty 150</h2>
            <button>Let's Start</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GSAPScroll
