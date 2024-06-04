import { useState, useEffect } from 'react';
import styles from "./AddItemModal.module.css";
import { Modal } from '../Modals/Modal';
import MultiplyIcon from "../../imgs/Multiply-x.png";
import AddImage from "../../imgs/Add-Image.png";

export const AddItemModal = ({ isOpen, onClose, onSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [itemPhoto, setItemPhoto] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Load categories from localStorage when the modal opens
      const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
      setCategories(savedCategories);
    }
  }, [isOpen]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', itemName);
    formData.append('photo', itemPhoto);
    formData.append('category', selectedCategory);

    try {
      const response = await fetch('http://localhost:9040/api/v1/items/newItem', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create item');
      }

      const data = await response.json();
      console.log('Item created:', data);
      onSubmit(data.data.item);
      onClose();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handlePhotoChange = (e) => {
    setItemPhoto(e.target.files[0]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Item">
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Add Item</h2>
          <img src={MultiplyIcon} alt="Close" className={styles.close} onClick={onClose} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="item-name"
            placeholder="Name*"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
          <div className={styles.modalLine}></div>
          <div className={styles.modalUpload}>
            <label htmlFor="item-photo" className={styles.uploadLabel}>
              <img src={AddImage} alt="Upload" />
              <span>(Add Photo, 2MB Total)</span>
            </label>
            <input type="file" id="item-photo" onChange={handlePhotoChange} style={{ display: 'none' }} />
          </div>
          <div className={styles.modalLine}></div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select Category*</option>
            {categories.map(category => (
              <option key={category._id} value={category.name}>{category.name}</option>
            ))}
          </select>
          <div className={styles.modalLine}></div>
          <div className={styles.modalActions}>
            <button type="button" className={styles.modalButtonCancel} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.modalButtonSubmit}>Add Item</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
