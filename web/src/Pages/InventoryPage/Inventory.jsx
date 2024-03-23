
import { PrimaryHeading } from "../../components/PrimaryHeading/PrimaryHeading";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Togglebtn } from "../../components/ToggleButton/ToggleButton";
import styles from "./Inventory.module.css";

export const InventoryPage = () => {
  return(
          <div className={styles.page_wrapper}> 
            <SearchBar />
            <PrimaryHeading />
            < Togglebtn />
          </div>   
    )
}