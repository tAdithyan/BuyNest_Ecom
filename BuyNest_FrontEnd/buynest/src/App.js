import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Admin_dashboard from './Admin/Pages/admin_dashboard';
import Admin_UserManageMent from './Admin/Pages/Admin_UserManageMent'
import Admin_Product_ManageMent from './Admin/Pages/Admin_Product_ManageMent';
// import UserPage from './UserPage';
// import ProductsPage from './ProductsPage';

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage user={user} />} />
        <Route path='/Login' element={<Login setUser={setUser} />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Admin' element={<Admin_dashboard />}>
          <Route path='User' element={<Admin_UserManageMent />} />
          <Route path='Products' element={<Admin_Product_ManageMent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

