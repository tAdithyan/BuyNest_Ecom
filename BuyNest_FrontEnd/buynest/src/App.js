import './App.css';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Auth/HomePage/Homepage';
import { useState } from 'react';
import Admin_dashboard from './Admin/Pages/admin_dashboard';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {
  const [user, setUser] = useState()
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Homepage user={user} />}></Route>
          <Route path='/Login' element={<Login setUser={setUser} />}></Route>
          <Route path='/Register' element={<Register />}></Route>


        </Routes>
        <Routes >
          <Route path='/Admin' element={<Admin_dashboard />}></Route>



        </Routes>
      </Router >
      {/* <Footer /> */}

    </>

  );
}

export default App;
