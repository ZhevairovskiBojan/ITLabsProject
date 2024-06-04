import { useState } from 'react';
import  styles from "./AddSupplierModal.module.css"
import { Modal } from '../Modals/Modal';
import MultiplyIcon from "../../imgs/Multiply-x.png"
import AddImage from "../../imgs/Add-Image.png"




export const AddSupplierModal = ({ isOpen, onClose, onSubmit }) => {
  const [supplierName, setSupplierName] = useState('');
  const [supplierPhoto, setSupplierPhoto] = useState(null);

  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(supplierName, supplierPhoto);
  };

  const handleSupplierChange = (e) => {
    setSupplierPhoto(e.target.files[0]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Add Supplier</h2>
        <img src={MultiplyIcon} alt="Close" className={styles.close} onClick={onClose} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="supplier-name"
            placeholder='Name*'
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            required
          />
        <div className={styles.modalLine}></div>
        <div className={styles.modalUpload}>
          <input type="file" id="supplier-photo" onChange={handleSupplierChange} style={{ display: 'none' }} />
            <img src={AddImage} alt="Upload" />
            <span>(Add Photo, 2MB Total)</span>
          </div>
        <div className={styles.modalLine}></div>
        <div className={styles.modalActions}>
            <button type="button" className={styles.modalButtonCancel} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.modalButtonSubmit}>Add Supplier</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};