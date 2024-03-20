// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CategoryOverview from "../src/components/Cards/CategoryOverview/CategoryOverview"
// import ItemOverview from "../src/components/Cards/ItemOverview/ItemOverview";
// import Activityhistory from "../src/Pages/Activityhistory/Activityhistory"
// import InventorySummary from "./components/InventorySummary/inventorySummary"
// import Layout from './components/Layout/Layout';
// import Dashboard from "./Pages/DashboardPage/Dashboard"
// import Inventory from "./Pages/InventoryPage/Inventory";
// import Suppliers from "./Pages/SuppliersPage/Suppliers";
// import Reports from './Pages/ReportsPage/Reports';


import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// import { ThemeProvider } from "./components/ThemeContext/ThemeContext";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { DashboardPage } from "./Pages/DashboardPage/Dashboard";
import { InventoryPage } from "./Pages/InventoryPage/Inventory";
import { ReportsPage } from "./Pages/ReportsPage/Reports";
import { SuppliersPage } from "./Pages/SuppliersPage/Suppliers";
import { NotFound } from "./Pages/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Routes>

      
      {!isAuthPage && (
        <section className="content-section">
          <Outlet />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/suppliers" element={<SuppliersPage />} />
            </Routes>
        </section>
      )}
    </div>
  );
}

export default App;