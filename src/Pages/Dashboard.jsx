import React, { useEffect } from "react";
import { OrdersList } from "../Context/OrderList-Context";
import { LatestOrder } from "./Latest-Order";
import { useOrder } from "../Context/OrderList-Context";

const Dashboard = () => {
  const {
    data: { ordersSummary },
    OrdersSummary,
  } = useOrder();

  useEffect(() => {
    OrdersSummary();
  }, []);

  let colorsOfData = [
    { name: "processing", color: "orange", icon: "fa-refresh" },
    { name: "delivered", color: "aqua", icon: "fa-check-square-o" },
    { name: "in delivery", color: "skyblue", icon: "fa-truck" },
    { name: "refund", color: "black", icon: "fa-sign-out" },
    { name: "cancelled", color: "red", icon: "fa-times-rectangle-o" },
  ];

  const quantity = (count) => {
    let totalSummaryCount = ordersSummary.summary.reduce(
      (acc, curr) => acc + curr.count,
      0
    );
    return (count / totalSummaryCount) * 100;
  };

  const ascending = () => {
    if (ordersSummary.summary) {
      return ordersSummary.summary.sort((a, b) => a.count - b.count);
    }
    return [];
  };

  const colorsFunc = (e, type) => {
    if (type === "color") {
      return colorsOfData.find((a) => a.name === e).color;
    } else {
      return colorsOfData.find((a) => a.name === e).icon;
    }
  };

  return (
    <div className="d-flex justify-content-center flex-wrap pt-5">
      <div
        className="d-flex flex-column align-items-center pt-4"
        style={{ width: "55rem" }}
      >
        <div
          className="d-flex flex-column align-items-start mb-4"
          style={{ width: "68%" }}
        >
          <h3 className="text-black-50 ms-3 ">Welcome Natalia</h3>
          <h1 className="ms-3">Overview Shop</h1>
        </div>
        <div className="d-flex">
          <div
            className="card text-bg-warning bg-opacity-10 m-2 rounded-4"
            style={{ width: "12rem", height: "12rem" }}
          >
            <div className="card-body text-start" style={{ width: "8rem" }}>
              <h4 className="card-text">New orders</h4>
            </div>
            <p className="text-start text-muted ms-3">
              +4.8% <i class="fa fa-upload"></i>
            </p>
            <h4 className="text-black text-start ms-3">
              $
              {ordersSummary.overview !== undefined
                ? ordersSummary.overview.new_orders[0].new_orders
                : undefined}
            </h4>
          </div>
          <div
            className="card text-bg-warning bg-opacity-10 m-2 rounded-4"
            style={{ width: "12rem", height: "12rem" }}
          >
            <div className="card-body text-start" style={{ width: "9rem" }}>
              <h4 className="card-text">Average Sale</h4>
            </div>
            <p className="text-start text-muted ms-3">
              +5% <i class="fa fa-upload"></i>
            </p>
            <h4 className="text-start ms-3">
              {ordersSummary.overview !== undefined
                ? ordersSummary.overview.average_sale[0].average_sale
                : undefined}
            </h4>
          </div>
          <div
            className="card text-bg-warning bg-opacity-10 m-2 rounded-4"
            style={{ width: "12rem", height: "12rem" }}
          >
            <div className="card-body text-start" style={{ width: "9rem" }}>
              <h4 className="card-text">Total Earnings</h4>
            </div>
            <p className="text-start text-muted ms-3">
              +3.2% <i class="fa fa-upload"></i>
            </p>
            <h4 className="text-start ms-3">
              {ordersSummary.overview !== undefined
                ? ordersSummary.overview.total_earnings[0].total_earnings
                : undefined}
            </h4>
          </div>
        </div>
        <div
          className="d-flex justify-content-around text-bg-secondary bg-opacity-10 rounded-4 p-4 mt-4 rounded-4 border border-grey"
          style={{ width: "95%", height: "50vh" }}
        >
          <div
            className="d-flex flex-column justify-content-between m-1"
            style={{ width: "85%" }}
          >
            {ascending()
              .reverse()
              .map((e) => {
                return (
                  <div className="d-flex justify-content-around align-items-center opacity-75">
                    <p
                      className="d-flex justify-content-center align-items-center rounded mb-0"
                      style={{
                        width: "3rem",
                        height: "3rem",
                        backgroundColor: `${colorsFunc(
                          e.order_status,
                          "color"
                        )}`,
                      }}
                    >
                      <i
                        className={`fa ${colorsFunc(
                          e.order_status,
                          "icon"
                        )} text-primary text-white`}
                        style={{ fontSize: "24px" }}
                      ></i>
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ width: "90%" }}
                    >
                      <h5 className="text-dark m-1">{e.order_status}</h5>
                      <h6 className="text-dark m-1">{e.count}</h6>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div
        className=" pt-4 text-bg-secondary bg-opacity-10 rounded-4 border border-grey"
        style={{ width: "50rem" }}
      >
        <LatestOrder />
      </div>
    </div>
  );
};

export { Dashboard };
