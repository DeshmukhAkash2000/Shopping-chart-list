import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../Context/LogIn";
import { OrdersList } from "../Context/OrderList-Context";
import { useOrder } from "../Context/OrderList-Context";

const LatestOrder = () => {
  const {
    data: { ordersList },
    OrdersList,
  } = useOrder();

  const [filetrValue, setFilterValue] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    OrdersList();
  }, []);

  const { dispatch } = useLoginContext();

  let colorsOfData = [
    { name: "processing", color: "yellow", icon: "" },
    { name: "delivered", color: "green", icon: "" },
    { name: "in delivery", color: "skyblue", icon: "" },
    { name: "refund", color: "red", icon: "" },
    { name: "cancelled", color: "black", icon: "" },
  ];

  const colorsFunc = (e) => {
    return colorsOfData.find((a) => a.name === e).color;
  };

  const filterData = () => {
    const ddd = ordersList;
    if (filetrValue === "Choose...") {
      return ddd;
    } else if (filetrValue) {
      return ddd.filter((item) => item.order_status === filetrValue);
    }

    return ddd;
  };

  const logout = () => {
    console.log("logout");
    dispatch({ type: "LOGOUT" });
    navigate("/")
  };

  return (
    <div className="p-3">
      <div className="text-end">
      <div className="text-start mb-5 d-flex justify-content-between">
        <h1 className="text-black fw-bolder" style={{ textAlign: "start" }}>
          Latest Orders
        </h1>
        <button onClick={logout} type="button" class="btn btn-primary ">
          Logout
        </button>
      </div>
      </div>
      <div className="input-group mb-3">
        <button
          className="border-0 rounded-start pe-3 ps-3"
          style={{ backgroundColor: "white" }}
        >
          <i className="fa fa-filter" style={{ fontSize: "24px" }}></i>
        </button>
        <select
          onClick={(e) => setFilterValue(e.target.value)}
          className="form-select border-0"
          id="inputGroupSelect03"
          aria-label="Example select with button addon"
          style={{ height: "6vh" }}
        >
          <option selected>Choose...</option>
          <option value="in delivery">in delivery</option>
          <option value="refund">refund</option>
          <option value="processing">processing</option>
          <option value="delivered">delivered</option>
          <option value="cancelled">cancelled</option>
        </select>
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
          {filterData().map((e) => {
            return (
              <div
                class="list-group-item d-flex justify-content-between pt-3"
                key={e.id}
              >
                <span>{e.date.slice(0, 10)}</span>
                <span>{e.id}</span>
                <span>{e.billing_name}</span>
                <span>{e.amount}</span>
                <span
                  className="rounded p-1 ms-1 bg-opacity-10"
                  style={{
                    backgroundColor: `${colorsFunc(e.order_status)}`,
                    color: `${
                      e.order_status === "cancelled" ? "white" : "black"
                    }`, width:"7rem"
                  }}
                >
                  {e.order_status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-end">
        <button type="button" class="btn btn-primary btn-lg mb-3">
          More orders
        </button>
      </div>
    </div>
  );
};

export { LatestOrder };
