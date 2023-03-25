import React from "react";
import { BsArrowRight, } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,img,price,title} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      
      <div className="card-body">
      <figure className="rounded">
        <img src={img} alt="Shoes" />
      </figure>
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <p className="text-orange-600 text-bold">Price : {price}</p>
          <div>
          <Link to={`/checkout/${_id}`}>
          <BsArrowRight className="text-orange-600 text-bold"/></Link></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
