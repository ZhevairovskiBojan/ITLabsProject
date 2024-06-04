import { useState } from 'react';
import styles from "./EditModal.module.css"; 
import { Modal } from '../Modals/Modal';
import MultiplyIcon from "../../imgs/Multiply-x.png"
import AddImage from "../../imgs/Add-Image.png"

export const EditModal = ({ isOpen, onClose, onSubmit }) => {
  const [editName, setEditName] = useState('');
  const [editPhoto, setEditPhoto] = useState(null);

  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(editName, editPhoto);
  };

  const handlePhotoChange = (e) => {
    setEditPhoto(e.target.files[0]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Edit Category</h2>
        <img src={MultiplyIcon} alt="Close" className={styles.close} onClick={onClose} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="edit-name"
            placeholder='Name*'
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            required
          />
        <div className={styles.modalLine}></div>
        <div className={styles.modalUpload}>
          <input type="file" id="item-photo" onChange={handlePhotoChange} style={{ display: 'none' }} />
            <img src={AddImage} alt="Upload" />
            <span>(Add Photo, 2MB Total)</span>
          </div>
        <div className={styles.modalLine}></div>
        <div className={styles.modalActions}>
            <button type="button" className={styles.modalButtonCancel} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.modalButtonSubmit}>SAVE CHANGES</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};