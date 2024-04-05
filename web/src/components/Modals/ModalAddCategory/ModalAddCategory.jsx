import React, { useState } from 'react';
import { useModal } from '../ModalContext'; // Adjust the import path as necessary
import styles from "../ModalAddCategory/ModalAddCategory.module.css"

const AddCategoryModal = () => {
  const { closeModal } = useModal();
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
    if (error) setError(''); // Reset error message when user starts typing
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/jpg") && file.size <= 2097152) {
      setCategoryImage(file);
    } else {
      setError("Please select a .jpeg or .jpg file smaller than 2MB");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      setError("Name is required");
      return;
    }
    // Assuming you have a function to call the API to add the category
    // addCategory({ name: categoryName, image: categoryImage });

    console.log("Submitting:", categoryName, categoryImage);
    closeModal(); // Close the modal after submission
  };

  return (
    <div className={styles.modalContainer}>
      <form onSubmit={handleSubmit} className={styles.modalForm}>
        <h2>Add Category</h2>
        <button onClick={closeModal}>X</button>
        <label htmlFor="categoryName">Name:</label>
        <input
          id="categoryName"
          type="text"
          value={categoryName}
          onChange={handleNameChange}
          placeholder="Category Name"
        />
        <label htmlFor="categoryImage">Image:</label>
        <input
          id="categoryImage"
          type="file"
          onChange={handleImageChange}
        />
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.buttonGroup}>
          <button type="button" onClick={closeModal}>Cancel</button>
          <button type="submit">Add Category</button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryModal;
