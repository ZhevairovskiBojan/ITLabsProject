import { useState } from 'react';
import  styles from "./AddModalCategory.module.css"
import { Modal } from '../Modals/Modal';
import MultiplyIcon from "../../imgs/Multiply-x.png"
import AddImage from "../../imgs/Add-Image.png"


export const AddCategoryModal = ({ isOpen, onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryPhoto, setCategoryPhoto] = useState(null);

  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(categoryName, categoryPhoto);
  };

  const handlePhotoChange = (e) => {
    setCategoryPhoto(e.target.files[0]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Add Category</h2>
        <img src={MultiplyIcon} alt="Close" className={styles.close} onClick={onClose} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="category-name"
            placeholder='Name*'
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        <div className={styles.modalLine}></div>
        <div className={styles.modalUpload}>
        <input type="file" id="category-photo" onChange={handlePhotoChange} style={{ display: 'none' }} />
            <img src={AddImage} alt="Upload" />
            <span>(Add Photo, 2MB Total)</span>
          </div>
        <div className={styles.modalLine}></div>
        <div className={styles.modalActions}>
            <button type="button" className={styles.modalButtonCancel} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.modalButtonSubmit}>Add Category</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};