

import { InventorySummary } from "../../components/InventorySummary/inventorySummary";
import { RecentActivity } from "../../components/RecentActivity/RecentActivity";
import { RecentOrders } from "../../components/RecentOrder/RecentOrders";
import styles from "./Dashboard.module.css";

export const DashboardPage = () => {
  return(
    <div className={styles.page_wrapper}> 
    <InventorySummary />
    <RecentActivity />
    <RecentOrders />
   
    </div>
  );
};