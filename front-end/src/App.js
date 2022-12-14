import "./App.css"

import { Route, Routes, Navigate } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<Navigate replace to="/not-found" />} />
          <Route path="/not-found" element={<NotFound/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </div>
  );
}

export default App;
