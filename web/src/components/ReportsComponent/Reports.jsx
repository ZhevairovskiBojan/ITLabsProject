import styles from "./Reports.module.css"
import TimeMachine from "../../imgs/TimeMachine.png";
import Product2 from "../../imgs/Product.png";

export const ReportsComponent = () => {
    
    const Link1 = () => {
        window.location.href = '/reports/activityhistory'; 
      };
    
      const Link2 = () => {
        window.location.href = '/reports/inventorysummary'; 
      };
    
    return(

    <>
    <div>
    <div className={styles.wrapper} onClick={Link1} >
        <div className={styles.title_wrap} >
            <img src={TimeMachine} className={styles.icon} alt="activity_icon" />
            <h1 className={styles.title} >Activity History</h1>
        </div>
        <text>Activity history helps keep track of the things you do with your items, categories, tags, etc., such as creating, editing or deleting</text>
    </div>

     <div className={styles.wrapper} onClick={Link2}>
            <div className={styles.title_wrap} >
                <img src={Product2}  className={styles.icon}alt="product_icon" />
                <h1 className={styles.title} >Inventory Summary</h1>
            </div>
        <text>Inventory Summary provides detailed visualizations about the total cost of the categories over a period of time.</text>
    </div>
    </div>

     </>
    )
}