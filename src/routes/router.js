import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/login";
import Register from "../components/register";
import Header from "../shared/header";
import Productlist from "../components/productlist";
import Edituser from "../components/editUser";
import { Admin } from "../components/admin";
import Adminpanel from "../components/adminPanel";
import Editproduct from "../components/editproduct";
import AddProduct from "../components/addProduct";
import Viewproduct from "../components/viewproduct";
import Cart from "../components/cart";
import UserProfile from "../components/userProfile";


export function Router() {

  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/product" element={<Productlist />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<Edituser />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
        <Route path="/editproduct/:id" element={<Editproduct />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<Viewproduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
