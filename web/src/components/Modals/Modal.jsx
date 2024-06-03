import styles from "../Modals/Modal.module.css"

export const Modal = ({ isOpen, title, children, onClose }) => {
if (!isOpen) 
return null;
 
return (
<div className={styles.modaloverlay}>
 <div className={styles.modal_Content}>
  <span className={styles.close} onClick={onClose}>&times;</span>
   <h2>{title}</h2>
      {children}
        </div>
</div>
);
};