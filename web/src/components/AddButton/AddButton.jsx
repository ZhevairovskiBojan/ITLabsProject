import React from "react";
import "./AddButton.css"
import addnew from "../../imgs/addnew.png";
import { model } from "mongoose";


const AddButton = () => {
    return (
        <div className="add">
            <button className="add-btn">
            <img src={addnew} alt="addnew"/>
            <span>ADD {model}</span>
            </button>
        </div>
    );
};

export default AddButton;