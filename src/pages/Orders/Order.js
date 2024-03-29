import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Order = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://car-server-ashen.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete this product');
    if(proceed){
        fetch(`https://car-server-ashen.vercel.app/orders/${id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
              alert('deleted successfully');
              const remaining = orders.filter(odr => odr._id !== id);
              setOrders(remaining);
            }
        })

    }
}

  return (
    <div>
      <h2 className="text-5xl"> You have {orders.length}</h2>
      <div className="overflow-x-auto w-full m-20 mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Order</th>
              <th>Customer</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map(order=><OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                ></OrderRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
