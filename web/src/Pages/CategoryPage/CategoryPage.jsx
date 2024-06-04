import styles from "./CategoryPage.module.css"
import { useState } from "react";
import { AddItemModal } from "../../components/AddItemModal/AddItemModal";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { searchDatabase, addItem } from '../../util/api';
import { Button } from "../../components/AddButton/AddButton";
import { Togglebtn } from "../../components/ToggleButton/ToggleButton";
import { ModalProvider } from "../../components/Modals/ModalContext";

export const Category = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddItem = async (name, photo) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('photo', photo);

      await addItem(formData);
      
     } catch (error) {
      
    } finally {
      setModalOpen(false);
    }
  };

  return (
    < ModalProvider>
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
    </div>
    </ModalProvider>

  );
};