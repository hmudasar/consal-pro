import React from "react";
import Slider from "react-slick";

const blogsData = [
  {
    date: "February - 22th 2024",
    text: "Will you be attending Affiliate Summit Europe?",
    desc: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
    image: "/images/blog-1.jpg",
  },
  {
    date: "February - 22th 2024",
    text: "Will you be attending Affiliate Summit Europe?",
    desc: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
    image: "/images/blog-2.jpg",
  },
  {
    date: "February - 22th 2024",
    text: "Will you be attending Affiliate Summit Europe?",
    desc: "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
    image: "/images/blog-3.jpg",
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrows z-[9] left-[-100px] top-[50%] absolute h-[60px] w-[60px] flex justify-center items-center hover:bg-orange"
      onClick={onClick}
    >
      <img src="/images/Chevron--left.svg" alt="Chevron--left" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrows z-[9] right-[-100px] top-[50%] absolute h-[60px] w-[60px] flex justify-center items-center hover:bg-orange"
      onClick={onClick}
    >
      <img src="/images/Chevron--right.svg" alt="Chevron--right" />
    </button>
  );
}

const Blogs = () => {
  const sliderSettings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="blogs relative lg:pt-0 py-[100px] lg:pb-[250px]">
      <div className="lg:max-w-[890px] xl:max-w-[1024px] 2xl:max-w-[1290px] mx-auto">
        <div className="text-center pb-[60px]">
          <div className="text-orange text-base leading-[29px] tracking-[2px] font-thin uppercase flex justify-center gap-2">
            Blog & News{" "}
            <img src="/images/bottom-right.svg" alt="bottom-right" />
          </div>
          <div className="max-w-[745px] m-auto">
            <h2 className="text-white text-[30px] xl:text-[50px] font-semibold leading-[1.2]">
              Our Latest News & Blog Get Every Updates
            </h2>
          </div>
        </div>
        <Slider {...sliderSettings} className="home-slider">
          {blogsData.map((data, i) => (
            <div className="single-slider px-3 pb-3" key={i}>
              <span className="text-gray text-base leading-[29px] block mb-[20px]">
                {data.date}
              </span>
              <h4 className="text-white text-[22px] font-semibold mb-[20px]">
                {data.text}
              </h4>
              <p className="text-gray text-base leading-[29px] block mb-[20px]">
                {data.desc}
              </p>
              <div className="h-[160px] overflow-hidden">
                <img
                  src={data.image}
                  alt={data.text}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex justify-end mt-[-26px] mr-[20px]">
                <button>
                  <img src="/images/right-arrow-clr.svg" alt="icon" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
