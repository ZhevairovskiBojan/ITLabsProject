


import { PrimaryHeading } from "../../components/PrimaryHeading/PrimaryHeading";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./Inventory.module.css";

export const InventoryPage = () => {
  return(
            <div className={styles.page_wrapper}> 
            < SearchBar />
            < PrimaryHeading />
           <h1 className={styles.inv}> INVENTORY PAGE </h1>
            </div>   
    )
}