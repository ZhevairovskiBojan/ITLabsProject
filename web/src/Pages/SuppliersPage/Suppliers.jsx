import React, { useState } from "react";
import "./Suppliers.css";
import ModalAddSupplier from "../../components/Modals/ModalAddSupliers";
import SupplierList from "../../Pages/SuppliersPage/SuppliersModal";

const Suppliers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newSupplies, setNewSupplies] = useState(null);

  const SupplierAdded = (s) => {
    console.log(s);
    setNewSupplies(s);
  };
  return (
    <div>
      <header className="">
        <h1>Suppliers </h1>
        <hr></hr>
      </header>
      <div className="top-btn">
        <div className="search">
          {/* <img src={require("../../images/search.png")} alt="search" /> */}
          <input
            type="text"
            placeholder="Search Suppliers"
            className="search-input"
          />
        </div>
        <div className="add">
          <button className="add-btn" onClick={() => setOpenModal(true)}>
            {/* <img src={require("../../images/addnew.png")} alt="addnew" /> */}
            <span>ADD SUPPLIER</span>
          </button>
        </div>
      </div>

      <div className="supplier-cards">
        <SupplierList newSupplies={newSupplies} />
      </div>
      <ModalAddSupplier
        onAdd={SupplierAdded}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Suppliers;
