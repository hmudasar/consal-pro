import React from "react";
import Slider from "react-slick";
const slideData = [
  {
    title: "Web Design",
    intro: "Creative",
    design: "Design",
    clientSays:
      "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.",
    clientName: "Eleanor Pena",
    clientDesignation: "Eleanor Pena",
  },
  {
    title: "Mobile Application",
    intro: "Invotation",
    design: "Ideas",
    clientSays:
      "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.",
    clientName: "Eleanor Pena",
    clientDesignation: "Eleanor Pena",
  },
];
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrows z-[9] left-0 bottom-0 absolute h-[40px] w-[40px] flex justify-center items-center hover:bg-orange"
      onClick={onClick}
    >
      <img src="/images/arrow-left.svg" alt="arrow left" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrows z-[9] left-[60px] bottom-0 absolute h-[40px] w-[40px] flex justify-center items-center hover:bg-orange"
      onClick={onClick}
    >
      <img src="/images/arrow-right.svg" alt="arrow right" />
    </button>
  );
}
const HomeSlider = () => {
  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="home-slider relative lg:pt-[60px] pb-[120px] px-5">
      <img
        src="/images/Dawn.png"
        className="absolute left-[15px] top-[50px] h-[150px] w-[150px] xl:h-[250px] xl:w-[250px] 2xl:h-[308px] 2xl:w-[308px]"
      />
      <img
        src="/images/Spiral-1.png"
        className="absolute right-[55px] lg:right-[155px] top-[65px] h-[140px] w-[140px] xl:h-[220px] xl:w-[220px] 2xl:h-[292px] 2xl:w-[275px] z-1"
      />

      <img
        src="/images/bg-shadow.svg"
        className="absolute right-0 top-[-160px] h-[700px] w-[700px]"
      />
      <div className="slider-container relative z-3">
        <Slider {...sliderSettings} className="home-slider">
          {slideData.map((data, i) => (
            <div className="single-slider lg:pb-0 pb-[70px]" key={i}>
              <div className="lg:flex justify-between items-end pt-10">
                <div className="lg:pl-[100px] pb-[20px] lg:pb-[120px] lg:w-2/3 lg:pr-[20px]">
                  <div className="lg:pl-[8%]">
                    <div className="heading-area lg:pl-[8%]">
                      <div className="text-white text-[34px] xl:text-[90px] 2xl:text-[120px] uppercase flex leading-tight gap-4 lg:gap-16 font-bold font-custom">
                        We Are
                        <img
                          src="/images/SuperToroid-Black-Matte.svg"
                          className="mt-[-10px] lg:mt-[-16px] 2xl:h-[131px] 2xl:w-[149px] xl:h-[110px] xl:w-[129px] h-[40px] w-[49px] z-1"
                        />
                      </div>
                      <div className="text-[34px] xl:text-[90px] 2xl:text-[120px] leading-none relative text-dark uppercase font-bold inline-flex font-custom bg-clip-text text-stroke-white ">
                        {data.title}{" "}
                        <img
                          src="/images/element-text.svg"
                          alt="element"
                          className="absolute right-[-50px] bottom-[10px] w-[68px] h-[62px] xl:w-[148px] xl:h-[136px] 2xl:w-[188px] 2xl:h-[166px] 2xl:right-[-120px] 2xl:bottom-[50px] xl:right-[-120px] xl:bottom-[50px]"
                        />
                      </div>
                      <div className="text-white text-[20px] xl:text-[70px] 2xl:text-[100px] leading-thin tracking-[0.8em] uppercase font-[100] flex font-custom">
                        Agency
                      </div>
                    </div>
                    <div className="image inline-block relative pt-12">
                      <img
                        src="/images/home-slide-image.png"
                        alt="home slider"
                      />
                      <div className="flex justify-between items-end lg:absolute lg:left-[-116px] right-0 bottom-[-12px]">
                        <div>
                          <p className="text-gray text-[8px] lg:text-base uppercase tracking-[4px]">
                            introduction
                          </p>
                          <h3 className="font-bold text-[20px] lg:text-[38px] custom-family text-white mb-4">
                            {data.intro}{" "}
                            <span className="font-light">{data.design}</span>
                          </h3>
                          <img src="/images/line.svg" alt="line" />
                        </div>
                        <button className="bg-orange w-[80px] h-[80px] lg:h-[190px] lg:w-[190px] rounded-[50%] p-3 lg:p-10 grid items-center justify-center">
                          <img
                            src="/images/send.svg"
                            alt="send"
                            className="m-auto lg:w-[30px] w-[16px]"
                          />
                          <span className="font-bold text-[12px] lg:text-[20px] text-black">
                            Explore More
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client-review max-w-[430px] lg:w-1/3">
                  <p className="text-gray font-bold italic text-base leading-[29px] mb-6">
                    {data.clientSays}
                  </p>
                  <img src="/images/line.svg" alt="line" />
                  <div className="flex justify-between mt-6 lg:mt-12">
                    <div className="flex gap-4 lg:gap-8 items-center">
                      <div className="avatart h-[62px] w-[62px] bg-gray rounded-[50%]"></div>
                      <div>
                        <h4 className="text-white text-base font-bold leading-[29px]">
                          {data.clientName}
                        </h4>
                        <p className="text-white text-sm font-light">
                          {data.clientDesignation}
                        </p>
                      </div>
                    </div>
                    <img src="/images/Signature.svg" alt="Signature" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
