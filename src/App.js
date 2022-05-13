import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}

export default App;
