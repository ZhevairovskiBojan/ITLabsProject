import styles from "../Button/Button.module.css"
import { useModal } from "../../../components/Modals/ModalContext"
import AddNew from "../../../imgs/addnew.png" 


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