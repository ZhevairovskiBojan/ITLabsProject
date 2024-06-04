import { useState, useEffect } from 'react';
import styles from "./AddModalCategory.module.css";
import { Modal } from '../Modals/Modal';
import MultiplyIcon from "../../imgs/Multiply-x.png";
import AddImage from "../../imgs/Add-Image.png";

export const AddCategoryModal = ({ isOpen, onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryPhoto, setCategoryPhoto] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (isOpen) {
      // Load categories from localStorage when the modal opens
      const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
      setCategories(savedCategories);
    }
  }, [isOpen]);

  useEffect(() => {
    // Save categories to localStorage whenever they change
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    // Create a FormData object to handle the file upload
    const formData = new FormData();
    formData.append('name', categoryName);
    formData.append('photo', categoryPhoto);

    try {
      const response = await fetch('http://localhost:9030/api/v1/category/newCategory', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create category');
      }

      const data = await response.json();
      console.log('Category created:', data);
      setCategories([...categories, data.data.newCategory]);
      onSubmit(data.data.newCategory);
      onClose();
    } catch (error) {
      console.error('Error creating category:', error);
      // Handle error, show message to user, etc.
    }
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
            <label htmlFor="category-photo" className={styles.uploadLabel}>
              <img src={AddImage} alt="Upload" />
              <span>(Add Photo, 2MB Total)</span>
            </label>
            <input type="file" id="category-photo" onChange={handlePhotoChange} style={{ display: 'none' }} />
          </div>
          <div className={styles.modalLine}></div>
          <div className={styles.modalActions}>
            <button type="button" className={styles.modalButtonCancel} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.modalButtonSubmit}>Add Category</button>
          </div>
        </form>
        <div className={styles.categoriesList}>
          
          <ul>
            {categories.map(category => (
              <li key={category._id}>{category.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};
