import { getJWt } from '../util/localStorage'
import React, {useEffect, useState} from 'react'
import { OrderAPI } from "../api/endpoints/order";

export default function OrderAdmin(){
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    OrderAPI.getOrder(getJWt())
    .then((res) => {
        setOrders(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  
  return (
    <main>
      <div className="container">
        <h1 className="text-center">Order page</h1>
          {orders?.map((order) =>(
            <div className="card" key={order.order_id}>
              <h5 className="card-header">{order.order_id}</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <p>User : {order.username}</p>
                    <p>Order Date : {order.order_date}</p>
                    <p><b>Order Total</b></p>
                    <p>{order.order_total}</p>
                  </div>
                  <div className="col-4">
                    <p>Status : <b>{order.order_status}</b></p>
                    <p>Change Status</p>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                      <button type="button" onClick={() => OrderAPI.updateProductWait(getJWt(),order.order_id)} className="btn btn-outline-primary">Wait</button>
                      <button type="button" onClick={() => OrderAPI.updateProductSend(getJWt(),order.order_id)} className="btn btn-outline-primary">Send</button>
                      <button type="button" onClick={() => OrderAPI.updateProductReject(getJWt(),order.order_id)} className="btn btn-outline-primary">Reject</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
      </div>
    </main>
  )
};

