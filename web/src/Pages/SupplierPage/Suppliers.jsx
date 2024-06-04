import { Button } from "../../components/AddButton/AddButton";
// import { ModalProvider } from "../../components/Modals/ModalContext";
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Suppliers } from "../../components/SupplyCard/Supplycard";
import { searchDatabase, addSupplier } from "../../util/api";
import { AddSupplierModal } from "../../components/AddSupplierModal/AddSupplierModal";

import styles from "./Suppliers.module.css"


export const SupplierPage =() => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSearch = async (query) => {
      // izvrsuvame prebaruvanje na databaza,  treba samo da modificirame da bara Suppliers
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
  
    const handleAddSupplier = async (name, photo) => {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('photo', photo);
  
        await addSupplier(formData);
        // Handle successful addition (e.g., refresh list, show success message)
      } catch (error) {
        // Handle error (e.g., show error message)
      } finally {
        setModalOpen(false);
      }
    };
  
  return(
      <>
      <div className={styles.page_wrapper}>
        <div className={styles.subheader} >
          <SearchBar placeholder="Search Supplier" onSearch={handleSearch} />
          <Button label="ADD SUPPLIER" onClick={handleOpenModal} />
          </div>
        <div>
            <AddSupplierModal isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddSupplier}/>
        </div>
        <div className={styles.suppliers_wrap} >
      <Suppliers />
      </div>
    </div>
      </>  
  );
};

