import styles from "./recentOrders.module.css";
import recentItem1Img from "../../imgs/RecentItem1.png";
import recentItem2Img from "../../imgs/RecentItem2.png";
import recentItem3Img from "../../imgs/RecentItem3.png";
import recentItem4Img from "../../imgs/RecentItem4.png";
import expandArrowImg from "../../imgs/ExpandArrow.png";


function RecentOrders() {
    return (
        <div>
            <h1>Recent Orders</h1>
            <div className={styles["rec-ord-wrap"]}>
            <div className={styles["rec-ord-card"]}>
               <img className={styles["rec-ord-img"]} src={recentItem1Img} alt="office mouse"></img>
                <p>Office Mouse</p>
                <p>7 Unit  | € 133.00</p>
            </div>

            <div className={styles["rec-ord-card"]}>
               <img className={styles["rec-ord-img"]} src={recentItem2Img} alt="A4 Paper"></img>
                <p>A4 Paper</p>
                <p>917 Unit  | € 28.00</p>
            </div>

            <div className={styles["rec-ord-card"]}>
               <img className={styles["rec-ord-img"]} src={recentItem3Img} alt="espresso"></img>
                <p>Espresso</p>
                <p>3 Unit  | € 22.00</p>
            </div>

            <div className={styles["rec-ord-card"]}>
               <img className={styles["rec-ord-img"]} src={recentItem4Img} alt="office pens"></img>
                <p>Office Pens</p>
                <p>64 Unit  | € 179.00</p>
            </div>
            <div className={styles["right-arrow"]}>
            <img src={expandArrowImg} alt="right arrow"></img>
            </div>
            <div className={styles["dot-wrap"]}>
                <div className={styles["round-dot"]}></div>
                <div className={styles["border-dot"]}></div>
                <div className={styles["border-dot"]}></div>

            </div>
        </div>
        </div>
        
    );
}

export default RecentOrders;
