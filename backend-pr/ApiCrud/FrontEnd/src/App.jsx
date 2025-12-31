import { useState } from "react";
import { Route , Routes } from 'react-router-dom'
import "./App.css";
import AddData from "./components/AddData/AddData";
import Header from "./components/Header/Header";
import ViewData from "./pages/viewData";
import Home from "./pages/home";
import EditData from "./pages/Edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Header />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addData" element={<AddData />} />
            <Route path="/viewData" element={<ViewData />} />
            <Route path="/edit/:id" element={<EditData />} />
        </Routes>
    </>
  );
}

export default App;
