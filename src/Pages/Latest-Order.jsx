
import React, { useEffect } from "react";
import { OrdersList } from "../Context/OrderList-Context";
import {useOrder} from "../Context/OrderList-Context"

const LatestOrder = () => {
    const {data:{ordersList} , OrdersList} = useOrder();

    useEffect(()=>{
        OrdersList()
    },[])

  return (
    <div>
      <div className="text-end">
            <i className="fa fa-search text-black me-3 mt-2" style={{ fontSize: "24px" }}></i>
            <i className="fa fa-bell-o text-black me-1 mt-2" style={{ fontSize: "24px" }}></i>
       </div>
       <div className="text-start mb-5">
            <h1 className="text-black fw-bolder" style={{textAlign:"start"}}>Latest Orders</h1>
        </div>
        <div>
            <div className="m-3 d-flex justify-content-between text-black">
                <span className="m-1">Date</span>
                <span className="m-1">ID</span>
                <span className="m-1">Billing name</span>
                <span className="m-1">Amount</span>
                <span className="m-1">Order Status</span>
            </div>
            <div class="list-group  mb-5">
                        {ordersList.map(e => {
                            return (
                                <div class="list-group-item d-flex justify-content-between pt-3" key={e.id}>
                                    <span >{e.date.slice(0,10)}</span>
                                    <span >{e.id}</span>
                                    <span>{e.billing_name}</span>
                                    <span>{e.amount}</span>
                                    <span>{e.order_status}</span>
                                </div>
                            )
                        })}
                    </div>
          </div>
          <div className="text-end">
                    <button type="button" class="btn btn-primary btn-lg mb-3">More orders</button>
                </div>
    </div>
  )
}

export{LatestOrder}