import styles from "../AddButton/AddButton.module.css"
import AddNew from "../../imgs/addnew.png" 

export const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
        <div className={styles.btn_symbol} >
            <img src={AddNew} alt="addnew_icon" />
        </div>
        {label}
    </button>
  );
};