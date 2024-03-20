// import React, { useEffect, useState } from "react";
// import CategoryCard from "../../components/Cards/CategoryCard/CategoryCardList";
// import TotalItemCard from "../../components/Cards/SummaryCard/Total-Item-Card";
// import OrderCard from "../../components/Cards/SummaryCard/Order-Card";
// import CostCard from "../../components/Cards/SummaryCard/Cost-Card";
// import "./Dashboard.css";
// import RecentActivity from "../../components/RecentActivity/RecentActivity";
// import RecentOrdersList from "../../components/Cards/RecentOrderCard/RecentOrderList";
// import Navigation from "../../components/Navigation/navigation";
// import HeaderDashBoard from "../../components/HeaderDashBoard/headerDashBoard";

// const Dashboard = () => {

//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   return (
    
//     <div className="dashboard-container">
     
//       <header className="header">
        
//         <h2>Welcome back {username}</h2>
//       </header>
//       <hr />

//       <div className="main-section">
//         <div className="inventory-summary section">
//           <h3>Inventory summary</h3>
//           <div className="cards">
//           <aside>
//         < Navigation />
//       </aside>
//             <HeaderDashBoard />
//             <CategoryCard />
//             <TotalItemCard />
//             <OrderCard />
//             <CostCard />
           
//           </div>
//         </div>
//       </div>
//       <div className="section-container">
//         <div className="recent-activity section">
//           <h3>Recent activity</h3>
//           <div className="activities">
//             <RecentActivity />
//           </div>
//         </div>
//       </div>
//       <div className="section-container">
//         <div className="recent-orders section">
//           <h3>Recent orders</h3>
//           <div className="cards">
//             {/* <ItemCard
//             img={mouse}
//             title={"Office Mouse"}
//             items={"7 Units"}
//             price={"$133.00"}
//           /> */}
//             <RecentOrdersList />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

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