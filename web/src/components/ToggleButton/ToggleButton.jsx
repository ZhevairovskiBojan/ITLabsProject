import { useState } from "react";
import styles from "./ToggleButton.module.css";
import ControlPanel from "../../imgs/ControlPanel.png";
import List from "../../imgs/List.png";
import { CategoryGrid } from "../CategoryCard/CategoryGrid/CategoryGrid";
import { CategoryList } from "../CategoryCard/CategoryList/CategoryList";

export const Togglebtn = () => {

    const [showComponent1, setShowComponent1] = useState(true);
    const [showComponent2, setShowComponent2] = useState(false);
  
    const toggleComponent1 = () => {
      setShowComponent1(true);
      setShowComponent2(false);
    };
  
    const toggleComponent2 = () => {
      setShowComponent1(false);
      setShowComponent2(true);
    };
  
    return (
      <div className={styles.btn_wrap} >
        <div className={styles.buttons} >
          <button  style={{backgroundImage: `url(${ControlPanel})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100px', height: '40px'}} onClick={toggleComponent1}> </button>
          <button style={{backgroundImage: `url(${List})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100px', height: '40px'}} onClick={toggleComponent2}></button>
        </div>
        {showComponent1 && <CategoryGrid />}
        {showComponent2 && <CategoryList />}
      </div>
    );
  };
  