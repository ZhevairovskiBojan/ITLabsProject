import styles from "./Inventory.module.css";
import { useState, useEffect} from "react";
import { Button } from "../../components/AddButton/AddButton";
import { ModalProvider } from "../../components/Modals/ModalContext";
import { PrimaryHeading } from "../../components/PrimaryHeading/PrimaryHeading";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Togglebtn } from "../../components/ToggleButton/ToggleButton";
import { searchDatabase, fetchCategories, addCategory } from '../../util/api';
// ddodavame funkcii
import { AddCategoryModal } from "../../components/AddModal/AddModalCategory";


export const InventoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleSearch = async (query) => {
            try {
                const searchResults = await searchDatabase(query);
                console.log('Search results:', searchResults);
              } catch (error) {
                console.error('Error searching database:', error);
              }
            };
  
      useEffect(() => {
      const loadCategories = async () => {
        try {
        const data = await fetchCategories();
        setCategories(data);
        } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
      loadCategories();
    }, []);
  
     const handleAddCategory = async (newCategory) => {
      try {
      const addedCategory = await addCategory(newCategory);
      setCategories((prevCategories) => [...prevCategories, addedCategory]);
      } catch (error) {
      console.error('Error adding category:', error);
      }
    };
    const handleButtonClick = () => {
   setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
    setIsModalOpen(false);
    };
  
    return (
    <ModalProvider >
          <div className={styles.page_wrapper}>
    <div className={styles.subheader} >
         <SearchBar placeholder="Search Categories" onSearch={handleSearch} />
          <Button label="ADD CATEGORY" onClick={() => handleButtonClick(true)} />
            </div>
          <div>
          <PrimaryHeading />
           <AddCategoryModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          onCategoryAdded={handleAddCategory}
         />
        <ul>
        {categories.map((category) => (
       <li key={category._id}>{category.name}</li>
          ))}
        </ul>
          <Togglebtn />
         </div>
      </div>
    </ModalProvider>
    );
  };
  