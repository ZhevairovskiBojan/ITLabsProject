import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ModalDelete from "../../Modals/ModalDelete";

const ItemsList = (props) => {
  const [items, setItems] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const categoryId = useLocation().state.categoryId;

  useEffect(() => {
    if (props.newItems !== null) setItems([...items, props.newItems]);
  }, [props.newItems]);

  useEffect(() => {
    fetch("/api/v1/item", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.filter((i) => i.categoryId === categoryId));
      })
      .catch((err) => console.err);
  }, []);

  const handleDeleteClick = (itemId) => {
    setSelectedItemId(itemId);
    setOpenDeleteModal(true);
  };

  const handleDeleteItem = async () => {
    try {
      const res = await fetch(`/api/v1/items/${selectedItemId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("jwt")}`,
        },
      });
      if (!res.ok) {
        throw "Failed to delete category";
      }
      setItems(items.filter((item) => item._id !== selectedItemId));
      setOpenDeleteModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="items-container">
      {items.map((item) => (
        <div key={item._id} className="item-card">
          <NavLink
            className="navlink-item"
            to="/inventory/category/item"
            state={{ itemId: item._id, itemName: item.name }}
          >
            <img alt="Item-Img" />
            <div>
              <h4>{item.name}</h4>
              <p>
                <b>{item.orders.length} Purchase records</b> | {"$"}{" "}
                {item.orders.reduce((previousPrice, currentOrder) => {
                  return previousPrice + Number(currentOrder.price);
                }, 0)}
              </p>
            </div>
          </NavLink>
          <div className="delbtn-item">
            <button onClick={() => handleDeleteClick(item._id)} className="">
              <img
                className="deletebtn"
                src={require("../../../imgs/deletebtn.png")}
                alt="deletebtn"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      ))}
      <ModalDelete
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onDelete={handleDeleteItem}
        text={"Are you sure you want to delete this item?"}
      />
    </div>
  );
};

export default ItemsList;
