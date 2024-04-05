
import { Button } from "../../components/AddButton/AddButton";
import { ModalProvider } from "../../components/Modals/ModalContext";
import { PrimaryHeading } from "../../components/PrimaryHeading/PrimaryHeading";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Togglebtn } from "../../components/ToggleButton/ToggleButton";
import styles from "./Inventory.module.css";

export const InventoryPage = () => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.subheader}>
        <SearchBar placeholder="Search Categories" onSearch={() => {}} />
        <ModalProvider>
                      <div>
                          <Button text="ADD CATEGORY" modalContent={<h2>Add Category model</h2>} />
                      </div>
                  </ModalProvider>
      </div>
      <PrimaryHeading title="Inventory"/>
      <Togglebtn />
    </div>
  );
};