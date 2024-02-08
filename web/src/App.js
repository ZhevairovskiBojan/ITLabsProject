import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/DashboardPage/dashboardPage';
import Inventory from './Pages/InventoryPage/Inventory';
import Reports from './Pages/ReportsPage/Reports';
import Suppliers from './Pages/SuppliersPage/Suppliers';
import Layout from './components/Layout/Layout';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/suppliers' element={<Suppliers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
