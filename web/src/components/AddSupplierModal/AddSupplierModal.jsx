import { useState } from 'react';
import  styles from "./AddSupplierModal.module.css"
import { Modal } from '../Modals/Modal';
import MultiplyIcon from "../../imgs/Multiply-x.png"


export const AddSupplierModal = ({ isOpen, onClose, onSubmit }) => {
  const [supplierName, setSupplierName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');


  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(supplierName, address, phoneNumber, email);
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
            placeholder='Supplier Name:'
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            required
          />
        <div className={styles.modalLine}></div>
        <div className={styles.modalDetails}>
        <input
            type="text"
            id="address"
            placeholder='Address:'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="tel"
            id="phone-number"
            placeholder='Phone Number:'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder='Email:'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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