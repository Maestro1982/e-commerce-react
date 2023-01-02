import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/BlogList';
import BlogCategoryList from './pages/BlogCategoryList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ProductList from './pages/ProductList';
import BrandList from './pages/BrandList';
import CategoryList from './pages/CategoryList';
import ColorList from './pages/ColorList';
import AddBlog from './pages/AddBlog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<Bloglist />} />
          <Route path='blog' element={<AddBlog />} />
          <Route path='blog-category-list' element={<BlogCategoryList />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='brand-list' element={<BrandList />} />
          <Route path='category-list' element={<CategoryList />} />
          <Route path='color-list' element={<ColorList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
