import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Test from './Apps/client/pages/Test';
import Admin from './Apps/admin/pages/Admin';
import AdminCategory from './Apps/admin/pages/AdminCategory';
import NotFound from './Apps/client/components/NotFound';
import Login from './Apps/admin/pages/Login';
import AdminMain from './Apps/admin/pages/AdminMain';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/HomePage';
import Navbar from './Apps/client/components/Navbar';
import AdminPromo from './Apps/admin/pages/AdminPromo';
import { AddProduct } from './Apps/admin/modules/Product/pages/AddProduct';
import { UpdateProduct } from './Apps/admin/modules/Product/pages/UpdateProduct';


function App() {
  const location = useLocation()
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path='/admin/:res' element={<Admin />} >
          <Route path='main' element={<AdminMain />} />
          <Route path='menu' element={<AdminCategory />} />
          <Route path='menu/:id' element={<UpdateProduct />} />
          <Route path='promo' element={<AdminPromo />} />
          <Route path='add-product' element={<AddProduct />} />
        </Route>

        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='navbar' element={<Navbar />} />
        <Route path='home' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />

        <Route path='vendor/:res' element={<Test />} >
        </Route>

      </Routes >


      <ToastContainer />
    </>
  );
}

export default App;
