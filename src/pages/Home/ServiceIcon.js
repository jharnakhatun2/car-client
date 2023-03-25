import React from 'react';
import { BiLocationPlus } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { MdLocalCarWash } from "react-icons/md";
import { FaBattleNet, IconName } from "react-icons/fa";

const ServiceIcon = () => {
    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-20 mx-auto">
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><BiLocationPlus className='text-6xl text-warning'></BiLocationPlus></figure>
                <div className="card-body">
                    <h2 className=" text-center card-title">Vehicle Drop Off And Pickup</h2>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><AiFillCar className='text-6xl text-warning'></AiFillCar></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">Shuttle Service
Available</h2>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><MdLocalCarWash className='text-6xl text-warning'></MdLocalCarWash></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">Free Vacuum And
Hand Car Wash</h2>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><FaBattleNet className='text-6xl text-warning'></FaBattleNet></figure>
                <div className="card-body">
                    <h2 className="card-title text-center text-base-400">3 Years/36k Miles
Warranty</h2>
                </div>
            </div>
            </div>
    );
};

export default ServiceIcon;