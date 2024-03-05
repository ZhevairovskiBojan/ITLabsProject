import React, { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";

const OrderCard = () => {
  const imgOrder = require("../../../imgs/Paper.png");
  const [number, setNumber] = useState([0]);

  useEffect(() => {
    fetch("/api/v1/orders", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((allOrders) => {
        setNumber(allOrders.length);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <SummaryCard img={imgOrder} description={"Total Orders"} number={number} />
  );
};

export default OrderCard;
