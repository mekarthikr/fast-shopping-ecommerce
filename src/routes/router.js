import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import Login from "../components/home/login";
import Register from "../components/home/register";
import Header from "../shared/header";
import Productlist from "../components/product/productlist";
import Edituser from "../components/user/editUser";
import { Admin } from "../components/admin/admin";
import Adminpanel from "../components/admin/adminPanel";
import Prototype from "../components/admin/editproduct";
import AddProduct from "../components/admin/addProduct";
import Viewproduct from "../components/product/viewproduct";
import Cart from "../components/cart/cart";
import UserProfile from "../components/user/userProfile";
import  ValidateSession from "../validation/validateSession";
import Footer from "../shared/footer";

export function Router() {
  ValidateSession()
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<Productlist />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<Edituser />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
        <Route path="/editproduct/:id" element={<Prototype />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<Viewproduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Footer/>
  </>
  );
}
