import styles from "./Inventory.module.css";
import { useState} from "react";
import { Button } from "../../components/AddButton/AddButton";
import { ModalProvider } from "../../components/Modals/ModalContext";
import { PrimaryHeading } from "../../components/PrimaryHeading/PrimaryHeading";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Togglebtn } from "../../components/ToggleButton/ToggleButton";
import { searchDatabase, addCategory } from '../../util/api';
import { AddCategoryModal } from "../../components/AddModal/AddModalCategory";
import { AddItemModal } from "../../components/AddItemModal/AddItemModal";




export const InventoryPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleSearch = async (query) => {
            try {
                const searchResults = await searchDatabase(query);
                console.log('Search results:', searchResults);
              } catch (error) {
                console.error('Error searching database:', error);
              }
            };

            const handleAddCategory = async (categoryName) => {
              const response = await addCategory({ name: categoryName });
              if (response.ok) {
              
              } else {
                
              }
              setIsModalOpen(false);
            };
  
     return (
    <ModalProvider >
          <div className={styles.page_wrapper}>
    <div className={styles.subheader} >
         <SearchBar placeholder="Search Categories" onSearch={handleSearch} />
          <Button label="ADD CATEGORY" onClick={() => setIsModalOpen(true)} />
            </div>
          <div>
          <PrimaryHeading />
          <AddCategoryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCategory} />
          <AddItemModal/>
         
      
          <Togglebtn />
         </div>
      </div>
    </ModalProvider>
    );
  };
  