import React from 'react';
import './Banner.css';
import { BsArrowRight} from "react-icons/bs";

const BannerItem = ({slide}) => {
    const {image,id,prev,next} = slide;
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={image} className="w-full h-auto rounded-lg" alt="" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 left-10 top-1/3">
            <h1 className="text-4xl md:text-8xl lg:text-8xl font-bold text-white mb-9">
              Care Service <br />
              For Your Car
            </h1>
          </div>
          <div className="hidden md:hidden lg:block">
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5 ">
            <p className="text-white text-xl">QUICK & RELIABLE WHEEL INSPECTION. WE OFFER FREE TIRES SERVICING. ENGINE OVERHAUL APPOINTMENTS. OUR COMPANY WILL DO IT'S BEST TO SEND YOU AND ESTIMATE WITHIN 24 HOURS.
            </p>
          </div>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 lg:left-24 left-10 top-2/3 ">
            <button className="btn btn-active btn-warning mr-5">Read More</button>
            <button className="btn btn-outline btn-warning">Order Now</button>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">
              ❮
            </a>
            <a href={`#slide${next}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
    );
};

export default BannerItem;