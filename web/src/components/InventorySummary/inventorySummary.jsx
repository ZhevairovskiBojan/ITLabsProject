import styles from "./inventorySummary.module.css";
import FolderImg from "../../imgs/Folder.png";
import CoinsImg from "../../imgs/Coins.png";
import DocumentsImg from "../../imgs/Documents.png";
import PaperImg from "../../imgs/Paper.png";

function InventorySummary() {
    return (
        <div>
            <h1>Inventory Summary</h1>
            <div className={styles["invSum-wrapper"]}>
                <div className={styles["inventory-card"]}>
                    <div className={styles["round-img1"]}>
                        <img src={FolderImg} alt="Folder" />
                    </div>
                    <div className={styles["inv-card-info"]}>
                       <h3>13</h3>
                       <b>categories</b>
                    </div>
                </div>

                <div className={styles["inventory-card"]}>
                    <div className={styles["round-img2"]}>
                        <img src={DocumentsImg} alt="document-icon" />
                    </div>
                    <div className={styles["inv-card-info"]}>
                       <h3>123</h3>
                       <b>items</b>
                    </div>
                </div>

                <div className={styles["inventory-card"]}>
                    <div className={styles["round-img3"]}>
                        <img src={PaperImg} alt="paper-icon" />
                    </div>
                    <div className={styles["inv-card-info"]}>
                       <h3>378</h3>
                       <b>Total Orders</b>
                    </div>
                </div>

                <div className={styles["inventory-card"]}>
                    <div className={styles["round-img4"]}>
                        <img src={CoinsImg} alt="coin-icon" />
                    </div>
                    <div className={styles["inv-card-info"]}>
                       <h3>€1.250k</h3>
                       <b>Total Cost</b>
                    </div>
                </div>
              
            </div>
        </div>
    );
}

export default InventorySummary;
