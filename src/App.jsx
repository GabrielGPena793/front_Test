import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Pages/NavBar/navbar';
import Footer from "./Pages/Footer/footer";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home";
import Description from "./Pages/Description/Description";
import Reservation from "./Pages/Reservation/Reservation";
import { AuthProvider } from "./Pages/Login/contextLogin/auth";
import Category from "./Pages/Category";
import './App.css';

export default function App() {
  return (
  <AuthProvider>
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />      
      <Route path="/description/:id" element={<Description />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/category/city/:city" element={<Category />} />
      <Route path="/category/date/:date" element={<Category />} />
      <Route path="/category/city/:city/date/:dateInit/:dateEnd" element={<Category />} />
      <Route path="/reservation/:id" element={<Reservation />} />
     </Routes>
    <Footer/>
  </BrowserRouter>
  </AuthProvider>
  );
}
