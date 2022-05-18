import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import ProtectedRoute from "./Pages/Shared/ProtectedRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppointment from "./Pages/DashBoard/MyAppointment";
import MyReview from "./Pages/DashBoard/MyReview";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment></Appointment>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard></DashBoard>
            </ProtectedRoute>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
