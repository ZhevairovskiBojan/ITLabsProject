import styles from "./CategoryPage.module.css"
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { searchDatabase } from '../../util/api';
import { Button } from "../../components/AddButton/AddButton";
import { Modal } from "../../components/Modals/Modal";
import { Togglebtn } from "../../components/ToggleButton/ToggleButton";
import { ModalProvider } from "../../components/Modals/ModalContext";

export const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ItemName, setItemName] = useState('');

       const handleSearch = async (query) => {
        // Perform database search
        try {
          const searchResults = await searchDatabase(query);
          console.log('Search results:', searchResults);
        } catch (error) {
          console.error('Error searching database:', error);
        }
      };

  const handleAddItem = async () => {
    const response = await fetch('/api/add-item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: ItemName }),
    });

    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }

    setIsModalOpen(false);
  };

  return (
    < ModalProvider>
    <div className={styles.page_wrapper}>
        <div className={styles.subheader} >
          <SearchBar placeholder="Search Items" onSearch={handleSearch} />
          <Button label="ADD ITEM" onClick={() => setIsModalOpen(true)} />
          </div>
        <div>
            <Modal
              isOpen={isModalOpen}
              title="Add Item"
              onClose={() => setIsModalOpen(false)}>
              <input
                type="text"
                value={ItemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <button onClick={handleAddItem}>Submit</button>
          </Modal>
          <Togglebtn />
        </div>
    </div>
    </ModalProvider>
  );
};