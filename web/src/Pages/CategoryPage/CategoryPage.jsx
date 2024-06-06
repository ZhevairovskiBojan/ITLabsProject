import styles from "./CategoryPage.module.css";
import { useState } from "react";
import { AddItemModal } from "../../components/AddItemModal/AddItemModal";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { searchDatabase, addItem, editCategory } from '../../uttil/api';
import { Button } from "../../components/AddButton/AddButton";
import { Togglebtn } from "../../components/ToggleButton/ToggleButton";
import { ModalProvider } from "../../components/Modals/ModalContext";
import { EditModal } from "../../components/EditModal/EditModal";


export const CategoryPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleSearch = async (query) => {
    try {
      const searchResults = await searchDatabase(query);
      console.log('Search results:', searchResults);
    } catch (error) {
      console.error('Error searching database:', error);
    }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEditOpenModal = () => {
    setEditModalOpen(true);
  };

  // Function to close the modal
  const handleEditCloseModal = () => {
    setEditModalOpen(false);
  };

  const handleAddItem = async (name, photo) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('photo', photo);

      await addItem(formData);
    } catch (error) {
      console.error('Error adding item:', error);
    } finally {
      setModalOpen(false);
    }
  };

  const handleEditCategory = async (name, photo) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('photo', photo);

      await editCategory(formData);
      // Handle successful addition (e.g., refresh list, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    } finally {
      setEditModalOpen(false);
    }
  };
  return (
    <ModalProvider>
   
    <div className={styles.page_wrapper}>
        <div className={styles.subheader} >
          <SearchBar placeholder="Search Items" onSearch={handleSearch} />
          <Button label="ADD ITEM" onClick={handleOpenModal}/>
          </div>
        <div>
          <AddItemModal isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddItem}/>
          <Togglebtn />
        </div>
        <div className={styles.bottomWrap}>
          <Button label="Edit Category" onClick={handleEditOpenModal} />
        </div>
         <EditModal isOpen={isEditModalOpen}
        onClose={handleEditCloseModal}
        onSubmit={handleEditCategory}/>
    </div>
  
    </ModalProvider>
  );
};