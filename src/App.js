import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
   <Footer/>
    </>
  );
}

export default App;
