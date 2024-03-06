import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryOverview from "../src/components/Cards/CategoryOverview/CategoryOverview"
import ItemOverview from "../src/components/Cards/ItemOverview/ItemOverview";
import Activityhistory from "../src/Pages/Activityhistory/Activityhistory"
import InventorySummary from "./components/InventorySummary/inventorySummary"
import Layout from './components/Layout/Layout';
import Dashboard from "./Pages/DashboardPage/Dashboard"
import Inventory from "./Pages/InventoryPage/Inventory";
import Suppliers from "./Pages/SuppliersPage/Suppliers";
import Reports from './Pages/ReportsPage/Reports';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Default />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/category" element={<CategoryOverview/>} />
          <Route path="inventory/category/item" element={<ItemOverview />} />
          <Route path="reports" element={<Reports />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="reports/activityhistory" element={<Activityhistory />} />
          <Route path="reports/inventorysummary" element={<InventorySummary />} />
        
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
