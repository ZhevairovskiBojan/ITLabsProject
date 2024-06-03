import { useState } from 'react';
import styles from "./AddItemModal.module.css"; 
import { Modal } from '../Modals/Modal';
import MultiplyIcon from "../../imgs/Multiply-x.png"
import AddImage from "../../imgs/Add-Image.png"

export const AddItemModal = ({ isOpen, onClose, onSubmit }) => {
  const [itemName, setItemName] = useState('');

  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemName);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Add Item</h2>
          <img src={MultiplyIcon} alt="Close" className={styles.close} onClick={onClose} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="item-name"
            placeholder='Name*'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
            className={styles.input} // Added class
          />
          <div className={styles.modalLine}></div>
          <div className={styles.modalUpload}>
            <img src={AddImage} alt="Upload" />
            <span>(Add Photo, 2MB Total)</span>
          </div>
          <div className={styles.modalLine}></div>
          <div className={styles.modalActions}>
            <button type="button" className={`${styles.modalButton} ${styles.modalButtonCancel}`} onClick={onClose}>Cancel</button>
            <button type="submit" className={`${styles.modalButton} ${styles.modalButtonSubmit}`}>Add Item</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
