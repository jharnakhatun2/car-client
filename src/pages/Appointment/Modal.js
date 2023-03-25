import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Modal = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const service = form.service.value;
        const reason = form.reason.value;
        const date = form.date.value;
        const time = form.time.value;

        const booking ={
            name : name,
            phone : phone,
            email : email,
            service : service,
            reason : reason, 
            appointmentDate : date, 
            appointmentTime : time   
          }
          console.log(booking);
          //Todo : send data to the server and
          // once data is saved then close modal
          // display success toast
          fetch(`http://localhost:5000/bookings`,{
            method : 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
            })
            .then(res => res.json())
            .then(data =>{
            console.log(data);
            toast.success('Booking confirmed');
            // if(data.acknowledged){
            //      //after submit modal is none
            //     toast.success('Booking confirmed');
                
            // }else{
            //     toast.error(data.message);
            // }
            
            })

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
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered w-full my-1  "
            />
            <div className="flex gap-3">
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              className="input input-bordered w-full my-1  "
              required
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered w-full my-1  "
              required
            />
            </div>

            <select name="service" className="select select-bordered w-full my-1">
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
            <select name="time" className="select select-bordered w-full my-1">
                <option disabled selected>9 AM </option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
            </select> 
                      
            <label htmlFor="bookingModal">
            <input type="submit" value="SUBMIT" className="btn btn-accent w-full input-bordered" /> 
            </label>
            
          </form>
            
        </div>
        </div>
        </>
    );
};

export default Modal;