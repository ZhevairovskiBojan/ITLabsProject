import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// import { ThemeProvider } from "./components/ThemeContext/ThemeContext";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { DashboardPage } from "./Pages/DashboardPage/Dashboard";
import { InventoryPage } from "./Pages/InventoryPage/Inventory";
import { Reports, ReportsPage } from "./Pages/ReportsPage/Reports";

import { NotFound } from "./Pages/NotFound/NotFound";
import { ActivityHistory } from "./Pages/ActivityHistory/ActivityHistory";
import InventorySummaryReport, { Chart, RecentSummaryReport } from "./Pages/RecentSummary/RecentSummary";
import { SupplierPage } from "./Pages/SupplierPage/Suppliers";
import FetchContextProvider from "./util/FetchContextProvider";


function App() {
  const location = useLocation();
  

  const isAuthPage = location.pathname === '/register' || location.pathname === '/login' || location.pathname === '*';

  return (
    <div className="App">
      
      {!isAuthPage && <Navbar />}
      {!isAuthPage && <Header />}
  
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>

      
      {!isAuthPage && (
        <section className="content-section">
          <Outlet />
          <FetchContextProvider>
          <Routes>
            
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/suppliers" element={<SupplierPage/>} />
            <Route path="/reports">
            <Route index element={<Reports />} />
            <Route path="/reports/activityhistory" element={<ActivityHistory />} />
            <Route path="/reports/inventorysummary" element={<RecentSummaryReport />} />
          </Route>
          

            <Route path="*" element={<NotFound />} />
            </Routes>
            </FetchContextProvider>
       
            
        </section>
      )}
    </div>
  );
}

export default App;