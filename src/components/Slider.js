import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";

const sliderData = [{
  img: "https://img.myloview.es/cuadros/programming-web-banner-best-programming-languages-technology-process-of-software-development-400-173369521.jpg",
  heading: 'Lorem ipsum dolor',
  discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati'
},
{
  img: "https://media.istockphoto.com/id/1466262366/photo/software-development-branching-strategy-process-workflow-with-flowchart-diagram-showing.jpg?b=1&s=612x612&w=0&k=20&c=xpTqPRRJ-IZpfq_VwJ-9askffaMCD0YTNDcEXMlxyrg=",
  heading: 'Dolore minus quibusdam',
  discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati'
},
{
  img: "https://community.connection.com/wp-content/uploads/2022/08/1842784-SIEM-Technology-Blog.jpg",
  heading: 'Sequi provident ratione',
  discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati'
},
{
  img: "https://etimg.etb2bimg.com/photo/98828436.cms",
  heading: 'Aspernatur fugiat qui dolorum',
  discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati'
},
{
  img: "https://cdn-bbaid.nitrocdn.com/wYFmIWkSNKpdInpiRfVoEqTErZtkFjBo/assets/images/optimized/rev-32e1ec2/wp-content/uploads/2022/03/Software-Product-Development-Strategy_Banner.jpg",
  heading: 'Tempora repellat aliquam',
  discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati'
},
{
  img: "https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg",
  heading: 'Debitis rem soluta nulla',
  discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati'
},
{
  img: "https://e0.pxfuel.com/wallpapers/626/499/desktop-wallpaper-software-development-code-at.jpg",
  heading: 'Lorem ipsum dolor',
  discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati'
},
{
  img: "https://media.istockphoto.com/id/1466262366/photo/software-development-branching-strategy-process-workflow-with-flowchart-diagram-showing.jpg?b=1&s=612x612&w=0&k=20&c=xpTqPRRJ-IZpfq_VwJ-9askffaMCD0YTNDcEXMlxyrg=",
  heading: 'Dolore minus quibusdam',
  discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati'
},]

const Slider = () => {
  const [item, setItem] = useState({
    heroEl: null,
    fullSizeWrapEl: null,
    contentEls: null,
  });

  useEffect(() => {
    setItem({
      heroEl: document.querySelector(".hero"),
      fullSizeWrapEl: document.querySelector(".hero__fullsize"),
      contentEls: document.querySelectorAll(".swiper .content"),
    })
  }, [])

  const contentFullsizeEls = item.contentEls && Array.from(item.contentEls, (el) => {
    const clone = el.cloneNode(true);
    clone.classList.add(
      "hero__content",
      "hero__content--hidden",
      "content--hero"
    );
    clone.classList.remove("content--slide");
    return clone;
  });

  contentFullsizeEls && contentFullsizeEls.forEach((el) => item.fullSizeWrapEl.appendChild(el));

  const contentState = {
    topContent: null,
    bottomContent: null
  };

  const handleSlideChange = (swiper) => {

    const content = contentFullsizeEls[swiper.activeIndex];
    if (!content) return;

    if (contentState.bottomContent) {
      contentState.bottomContent.classList.remove("hero__content--bottom");
      contentState.bottomContent.classList.add("hero__content--hidden");
    }

    if (contentState.topContent) {
      contentState.topContent.classList.remove("hero__content--top");
      contentState.topContent.classList.add("hero__content--bottom");
    }

    contentState.bottomContent = contentState.topContent;
    contentState.topContent = content;

    const slidetRect = swiper.slides[swiper.activeIndex].getBoundingClientRect();
    const parentRect = item.heroEl.getBoundingClientRect();

    content.style.transition = "none";
    content.style.left = slidetRect.left - parentRect.left + "px";
    content.style.top = slidetRect.top - parentRect.top + "px";
    content.style.width = slidetRect.width + "px";
    content.style.height = slidetRect.height + "px";
    content.style.borderRadius = "var(--border-radius, 0)";

    content.getBoundingClientRect();

    content.classList.remove("hero__content--hidden");
    content.classList.add("hero__content--top", "hero__content--grow");

    content.style.transition = "";
    content.style.left = "";
    content.style.top = "";
    content.style.width = "";
    content.style.height = "";
    content.style.borderRadius = "";

    const onShowTextEnd = (event) => {
      if (event.target !== event.currentTarget) {
        event.currentTarget.classList.remove("hero__content--show-text");
        event.currentTarget.removeEventListener("transitionend", onShowTextEnd);
      }
    };

    const onGrowEnd = (event) => {
      event.currentTarget.classList.remove("hero__content--grow");
      event.currentTarget.classList.add("hero__content--show-text");
      event.currentTarget.addEventListener("transitionend", onShowTextEnd);
    };

    content.addEventListener("transitionend", onGrowEnd, { once: true });

  }

  const handleSwipeInit = (swiper) => {

    // const content = contentFullsizeEls[swiper.activeIndex];
    // if (!content) return;

    // content.classList.remove("hero__content--hidden");
    // content.classList.add("hero__content--top");
    // contentState.topContent = content;
  }

  return (
    <div className="hero">
      <div className="hero__fullsize"></div>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3.5}
        spaceBetween={20}
        speed={1500}
        simulateTouch={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true
        }}
        navigation={true}
        onSwiper={handleSwipeInit}
        onSlideChange={handleSlideChange}
        className="hero__swiper swiper"
      >
        <div className="swiper-wrapper">
          {sliderData.map((data, ind) =>
            <SwiperSlide key={ind} className='swiper-slide' id='current-slide'>
              <div className="content content--slide">
                <img className="content__image" src={data.img} alt="" />
                <div className="content__text">
                  <h2 className="content__title">{data.heading}</h2>
                  <p className="content__desc">{data.discription}</p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </div>
      </Swiper>

    </div>
  )
}

export default Slider
