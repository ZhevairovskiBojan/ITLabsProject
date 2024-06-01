import { useState } from 'react';
import { Modal } from '../Modals/Modal';
import { addCategory } from '../../util/api';


export const AddCategoryModal = ({ isOpen, onRequestClose, onCategoryAdded }) => {
  const [name, setName] = useState('');

  const handleAddCategory = async () => {
    try {
    const newCategory = { name };
    const addedCategory = await addCategory(newCategory);
    onCategoryAdded(addedCategory);
      onRequestClose();
    } catch (error) {
      console.error('Error adding category:', error);
    }
};

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
     <h2>Add Category</h2>
     <input
       type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
      />
     <button onClick={handleAddCategory}>Add</button>
     <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};