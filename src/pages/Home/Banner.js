import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: img1,
    prev: 3,
    id: 1,
    next: 2
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 1
  }
];
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        {
          bannerData.map(slide =><BannerItem key={slide.id} slide = {slide}></BannerItem>)
        }

        {/* <BannerItem image={img1}></BannerItem> */}

        {/* <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Banner;
