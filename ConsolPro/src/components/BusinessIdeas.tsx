import React, { useState } from "react";

const businessData = [
  {
    title: "Web Design & Development",
    desc: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
  },
  {
    title: "Advertising and Marketing Campaigns",
    desc: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
  },
  {
    title: "Creative Consulting and Development",
    desc: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
  },
  {
    title: "Branding and Identity Design",
    desc: "Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam.",
  },
];
const BusinessIdeas = () => {
  return (
    <div className="relative overflow-hidden 2xl:pb-[260px] xl:pb-[200px] lg:pb-[160px] pb-[100px]">
      <img
        src="/images/bg-shadow.svg"
        className="absolute right-[-300px] bottom-0 h-[100%] w-full max-w-[700px]"
      />
      <img
        src="/images/Ornament.png"
        className="absolute right-[53px] top-0 h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] 2xl:h-[300px]  2xl:w-[300px] z-[6]"
      />
      <div className="lg:max-w-[890px] xl:max-w-[1024px] 2xl:max-w-[1290px] relative mx-auto bg-light-dark rounded-[20px]">
        <img
          src="/images/cap-2.png"
          className="absolute right-0 top-0 h-[300px] w-[300px]"
        />
        <div className="relative z-[10] px-[20px] py-[40px] lg:p-[50px] 2xl:p-[72px]">
          <div className="text-center">
            <h3 className="font-bold justify-center text-[20px] lg:text-[38px] 2xl:text-[48px] custom-family text-white mb-4 flex gap-4">
              <span className="font-light">Unique</span> Ideas
              <img
                src="/images/idea.png"
                alt="idea"
                className="2xl:w-[220px] lg:w-[180px] w-[130px]"
              />
            </h3>
            <h3 className="font-bold justify-center text-[20px]  lg:text-[38px] 2xl:text-[48px] custom-family items-center text-white mb-4 flex gap-4">
              <img
                src="/images/arrow-top-right.png"
                alt="idea"
                className="w-[50px] lg:w-[70px] 2xl:w-[90px]"
              />
              For Your <span className="font-light">Business</span>
            </h3>
          </div>
          <div className="flex flex-wrap border border-dark mt-[60px]">
            {businessData.map((item, i) => {
              const [showDesc, setShowDesc] = useState(false);
              return (
                <div
                  className="single-business flex w-full lg:w-1/2 xl:w-1/4 h-full "
                  key={i}
                  onMouseEnter={() => setShowDesc(true)}
                  onMouseLeave={() => setShowDesc(false)}
                >
                  <div className="child flex w-full flex-col px-[20px] 2xl:px-[30px] h-full pt-[30px] pb-[20px] 2xl:pt-[40px] 2xl:pb-[30px]">
                    <div>
                      <h6 className="text-white text-[18px] font-medium mb-4">
                        {item.title}
                      </h6>
                      <div className="min-h-[130px]">
                        <p
                          className={`text-gray leading-[29px] text-base line-clamp-3 lg:${
                            showDesc ? "" : "hidden"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-[40px]">
                      <button className="h-[42px] w-[42px]">
                        {showDesc ? (
                          <img
                            src="/images/arrow-top-right.png"
                            alt="arrow-top-right"
                          />
                        ) : (
                          <img
                            src="/images/arrow-top-right-small.svg"
                            alt="arrow-top-right-small"
                          />
                        )}
                      </button>
                      <div
                        className={`text-[50px] leading-none relative  uppercase font-bold inline-flex ${
                          showDesc
                            ? "text-orange"
                            : "font-custom text-dark bg-clip-text text-stroke-white opacity-[15%]"
                        }`}
                      >
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIdeas;
