import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

const clientData = [
  {
    desc: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.",
    name: "Marvin McKinney",
    jobTitle: "Web designer",
  },
  {
    desc: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.",
    name: "Marvin McKinney",
    jobTitle: "Web designer",
  },
  {
    desc: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.",
    name: "Marvin McKinney",
    jobTitle: "Web designer",
  },
];

const clientImage = [
  {
    image: "/images/client-1.svg",
  },
  {
    image: "/images/client-2.jpg",
  },
  {
    image: "/images/client-3.svg",
  },
];
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrows z-[9] left-[0px] bottom-[0px] absolute h-[44px] w-[44px] rounded-[5px] flex justify-center items-center border border-dark hover:bg-orange"
      onClick={onClick}
    >
      <img src="/images/left-sort.svg" alt="sort left" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrows z-[9] left-[60px] bottom-[0px] absolute h-[44px] w-[44px] rounded-[5px] flex justify-center items-center border border-dark hover:bg-orange"
      onClick={onClick}
    >
      <img src="/images/right-sort.svg" alt="right-sort" />
    </button>
  );
}
const Testimonials = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  const sliderSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  var navSettings = {
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  return (
    <div className="lg:flex lg:mt-[-139px] relative z-[2]">
      <div className="lg:w-1/2 pt-[96px] px-4">
        <img
          src="/images/testimonials.jpg"
          alt="testimonial"
          className="m-auto"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="bg-light-dark py-[100px] px-[40px]">
          <div className="lg:flex items-center">
            <Slider
              asNavFor={nav1 as Slider}
              className="lg:w-[30%] nav-slider"
              ref={sliderRef2}
              slidesToShow={3}
              {...navSettings}
            >
              {clientImage.map((data, i) => (
                <div key={i} className="my-[15px]">
                  <img
                    src={data.image}
                    alt={`Client ${i + 1}`}
                    className="h-[80px] w-[80px] rounded-[50%]"
                  />
                </div>
              ))}
            </Slider>
            <Slider
              className="lg:w-[70%]"
              asNavFor={nav2 as Slider}
              ref={sliderRef1}
              {...sliderSettings}
            >
              {clientData.map((data, i) => (
                <div key={i} className="relative pb-16">
                  <p className="text-[18px] leading-[29px] text-gray mb-[20px]">
                    {data.desc}
                  </p>
                  <h5 className="text-[22px] font-semibold text-white">
                    {data.name}
                  </h5>
                  <p className="text-[14px] text-gray leading-[29px]">
                    {data.jobTitle}
                  </p>
                  <img
                    src="/images/quote.svg"
                    alt="quote"
                    className="absolute right-0 bottom-[0px]"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
