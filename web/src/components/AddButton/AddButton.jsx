import styles from "../AddButton/AddButton.module.css"
import AddNew from "../../imgs/addnew.png" 
import { useModal } from "../Modals/ModalContext";



export const Button = ({ onClick, text, modalContent }) => {
  const { openModal } = useModal();
  

  const handleClick = () => {
    if (modalContent) {
      openModal(modalContent);
    } else {
      onClick();
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
     
        <div className={styles.btn_symbol} >
            <img src={AddNew} alt="addnew_icon" />
        </div>
      {text}
    </button>
    
  );
};
