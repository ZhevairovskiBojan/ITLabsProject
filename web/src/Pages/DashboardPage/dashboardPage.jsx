import React from "react";
import styles from "./dashboardPage.module.css"
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import RecentOrders from "../../components/RecentOrder/RecentOrders";

import Navigation from "../../components/Navigation/navigation";
import Header from "../../components/Header/header";
import Inventory from "../InventoryPage/Inventory";



function Dashboard () {
    

    return (
        <section className={styles["main-section"]}>
            <aside>
                <Navigation/>
            </aside>
            <main>
                <header>
                    <Header title="Dashboard" className={styles["user-section"]}/>
                </header>
                <div className={styles["container"]}>
                    {< Inventory />}
                    {< RecentActivity />}
                    {< RecentOrders />}
                </div>
            </main>
        </section>
    );
}

export default Dashboard