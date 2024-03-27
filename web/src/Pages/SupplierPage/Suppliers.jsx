import { ModalProvider } from "../../components/Modals/ModalContext";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Suppliers } from "../../components/SupplyCard/Supplycard";
import { searchDatabase } from "../../util/api";
import { Button } from "./Button/Button";
import styles from "./Suppliers.module.css"


export const SupplierPage =() => {

  const handleSearch = async (query) => {
      // izvrsuvame prebaruvanje na databaza,  treba samo da modificirame da bara Suppliers
      try {
        const searchResults = await searchDatabase(query);
        console.log('Search results:', searchResults);
      } catch (error) {
        console.error('Error searching database:', error);
      }
    };
  
  return(
    <>
    
          <div className={styles.page_wrapper}> 
              <div className={styles.subheader} >
                  <SearchBar placeholder="Search Suppliers" onSearch={handleSearch} />
                  <ModalProvider>
                      <div>
                          <Button text="ADD SUPPLIER" modalContent={<h2>Add Suplier Modal</h2>} />
                      </div>
                  </ModalProvider>
              </div>
          </div>
          <div className={styles.suppliers_wrap} >
          <Suppliers />
        </div>
      </>
  )
}

