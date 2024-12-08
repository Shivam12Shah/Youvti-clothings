import React from 'react'
import { Routes, Route } from "react-router";  
import Nav from './components/navbar/Nav';
import Footer from './components/footer/Footer';
import Routers from './components/routings/Routers';

const App = () => {
  return (
   <>
   <Nav></Nav>
   <Routers/>
   <Footer></Footer>
   </>
  )
}

export default App
