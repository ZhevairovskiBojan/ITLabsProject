import React from "react";
import "./OrderList.css";

const OrdersList = ({ orders }) => {
  return (
    <table className="myTable">
      <thead>
        <th onClick="sortTable(0)">Quantity</th>
        <th onClick="sortTable(1)">Total Price</th>
        <th onClick="sortTable(1)">Price per unit</th>
        <th onClick="sortTable(1)">Ordered At</th>
        <th onClick="sortTable(1)">Supplier</th>
      </thead>
      <tbody>
        {orders.map((order) => {
          return (
            <tr key={order._id}>
              <td>{order.quantity} units</td>
              <td>$ {order.price}</td>
              <td>$ {Number(order.price) / Number(order.quantity)}</td>
              <td>{order.createdAt}</td>
              <td>{order.supplier}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OrdersList;
