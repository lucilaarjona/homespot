import { React, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Home from "../pages/home";
import ProtectedRoutes from "../components/protectedRoutes/ProtectedRoutes";
import Product from "../pages/product/Product";
import Layout from "../components/Layout/Layout";
import CategoryProvider from "../context/CategoryContext";
import CityProvider from "../context/CityContext";
import ProductProvider from "../context/ProductContext";
import Booking from "../components/Booking/Booking";
import { UserContext } from "../context/UserContext";
import { Intro } from "../pages/Admin/newProduct/Intro";
import View2 from "../pages/Admin/newProduct/View2";
import View3 from "../pages/Admin/newProduct/View3";
import ViewUbication from "../pages/Admin/newProduct/ViewUbication";
import Preview from "../components/ProductsPreview/Preview";

const Routers = () => {
  const { logged } = useContext(UserContext);
  return (
    <BrowserRouter>
      <ProductProvider>
        <CityProvider>
          <CategoryProvider>
            <Layout>
              <Routes>
                <Route path="/product/:id" element={<Product />} />
                <Route path="/" element={<Home />} />
                <Route path="/logIn" element={<LogIn />} />
                <Route
                  path="/register"
                  element={<Register />}
                />
                <Route element={<ProtectedRoutes isLogged={logged} />}>
                  <Route path="/newProduct" element={<Intro />} />
                  <Route path="/newProduct/features" element={<View2 />} />
                  <Route path="/newProduct/preview/product" element={<Preview />} />
                  <Route path="/newProduct/ubication" element={<ViewUbication/>} />
                  <Route path="/newProduct/preview" element={<View3/>} />
                  <Route path="/product/:id/booking" element={<Booking />} />
                </Route>
              </Routes>
            </Layout>
          </CategoryProvider>
        </CityProvider>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default Routers;
