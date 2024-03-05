import React from "react";
import "./AddButton.css"
import addnew from "../../imgs/addnew.png";


const AddButton = () => {
    return (
        <div className={styles["add"]}>
            <button className={styles["add-btn"]}>
            <img src={addnew} alt="addnew"/>
            <span>ADD {model}</span>
            </button>
        </div>
    );
};

export default AddButton;