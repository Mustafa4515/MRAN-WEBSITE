import Header from "./component/layout/Header/Header";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import './App.css';
import React from 'react';
import webFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails"
function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chillanka"],
      }
    })
  }, [])
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route  path="/" element={<Home/> } />
      <Route  path="/product/:id" element={<ProductDetails/> } />

    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
