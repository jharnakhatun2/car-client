import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Modal = () => {
    const [value, onChange] = useState(new Date());

    const handleSubmit = event =>{
        event.preventDefault();
    }

    return (
        <>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="bookingModal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-3xl text-center">Schedule an Online Appointment</h3>
            <form onSubmit={handleSubmit} className="m-6">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full my-1  "
            />
            <div className="flex gap-3">
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              className="input input-bordered w-full my-1  "
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full my-1  "
            />
            </div>

            <select className="select select-bordered w-full my-1">
                <option disabled selected>Select Service :</option>
                <option>New Tires & Tire Repair</option>
                <option>Brakes & Brake Repair</option>
                <option>Oil Change</option>
                <option>Exhaust System Services</option>
                <option>Lights & Accessories</option>
                <option>Maintenance Package</option>
            </select>

            <input
              type="text"
              name="reason"
              placeholder="Appointment Reason"
              className="input input-bordered w-full my-1  "
            />
            <input
              type="date"
              name="date"
              className="input input-bordered w-full my-1  "
            />
            <select className="select select-bordered w-full my-1">
                <option disabled selected>9 AM </option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
            </select>            
            <label type="submit" htmlFor="bookingModal" className="btn btn-warning w-full input-bordered">SUBMIT</label>
            
          </form>
            
        </div>
        </div>
        </>
    );
};

export default Modal;