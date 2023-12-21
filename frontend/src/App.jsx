import "./App.css";
import AddUser from "./Components/AddUser";
import AllUser from "./Components/AllUser";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/all-user" element={<AllUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
