import React from "react";
import styles from "./dashboardPage.module.css"
import RecentOrders from "../../components/RecentOrder/RecentOrders";
import Navigation from "../../components/Navigation/navigation";
import InventorySummary from "../../components/InventorySummary/inventorySummary";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import HeaderDashBoard from "../../components/HeaderDashBoard/headerDashBoard";

const Dashboard = () => {
    
    
    return (
        <section className={styles["main-section"]}>
            <aside>
                <Navigation/>
            </aside>
            <main>
                <header>
                    <HeaderDashBoard title="Dashboard" className={styles["user-section"]}/>
                    { <HeaderDashBoard />}
                </header>
                <div className={styles["content-wrapper"]}>
                <div className={styles["container"]}>
                    {< InventorySummary />}
                    {< RecentActivity /> }
                    {< RecentOrders />}
                </div>
                    
                </div>
            </main>
        </section>
    );
}

export default Dashboard;