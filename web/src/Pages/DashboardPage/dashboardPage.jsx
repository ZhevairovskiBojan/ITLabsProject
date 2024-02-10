import React from "react";
import styles from "./dashboardPage.module.css"
import RecentOrders from "../../components/RecentOrder/RecentOrders";
import Navigation from "../../components/Navigation/navigation";
import Header from "../../components/Header/header";
import InventorySummary from "../../components/InventorySummary/inventorySummary";
import RecentActivity from "../../components/RecentActivity/RecentActivity";




function Dashboard () {
    

    return (
        <section className={styles["main-section"]}>
            <aside>
                <Navigation/>
            </aside>
            <main>
                <header>
                    <Header title="Dashboard" className={styles["user-section"]}/>
                    { <Header />}
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

export default Dashboard