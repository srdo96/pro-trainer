import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Cart from "./components/Cart/Cart";
import ReqAuth from "./components/ReqAuth/ReqAuth";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/checkout"
          element={
            <ReqAuth>
              <CheckOut></CheckOut>
            </ReqAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
