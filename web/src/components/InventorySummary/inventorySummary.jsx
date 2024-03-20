import styles from "../InventorySummary/inventorySummary.module.css";
import FolderIcon from "../../imgs/Folder.png";
import DocumentsIcon from "../../imgs/Documents.png";
import PaperIcon from "../../imgs/Paper.png";
import CoinsIcon from "../../imgs/Coins.png";




export const InventorySummary = () => {

    return(
  
      <div className={styles.invsumgrid}>
      <h2 className={styles.comp_heading}>Inventory Summary</h2>
      <div className={styles.invsumcard}>
          <div id={styles.one} className={styles.round_img}><img src={FolderIcon} className={styles.inv_sum_icon} alt="folder_icon"/></div>
          <span className={styles.card_quantity} >13</span>
          <h3 className={styles.subheading}>Categories</h3>
        </div>
        <div className={styles.invsumcard}>
          <div id={styles.two} className={styles.round_img}><img src={DocumentsIcon} className={styles.inv_sum_icon} alt="documents_icon"/></div>
          <span className={styles.card_quantity} >123</span>
            <h3 className={styles.subheading}>Items</h3>
        </div>
        <div className={styles.invsumcard}>
          <div id={styles.three} className={styles.round_img}><img src={PaperIcon} className={styles.inv_sum_icon} alt="paper_icon"/></div>
          <span className={styles.card_quantity} >378</span>
            <h3 className={styles.subheading}>Total Orders</h3>
          </div>
        <div className={styles.invsumcard}>
          <div id={styles.four}className={styles.round_img}><img src={CoinsIcon} className={styles.inv_sum_icon} alt="coins_icon"/></div>
          <span className={styles.card_quantity} >€1.250k</span>
            <h3 className={styles.subheading}>Total Costs</h3>
        </div>
      </div>
  )};