import "./App.css";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopCard from "./pages/ShopCard/ShopCard";
import LoanPay from "./pages/LoanPay/LoanPay";
import Profile from "./pages/Profile/Profile";
import Sections from "./pages/Profile/Components/Sections";
import AboutUs from "./pages/Profile/Components/AboutUs";
import Branches from "./pages/Profile/Components/Branches";
import CoinDeal from "./pages/Profile/Components/CoinDeal";
import Critics from "./pages/Profile/Components/Critics";
import FaQ from "./pages/Profile/Components/FaQ";
import GoldDeal from "./pages/Profile/Components/GoldDeal";
import Payment from "./pages/Profile/Components/Payment";
import Rules from "./pages/Profile/Components/Rules";
import Warranty from "./pages/Profile/Components/Warranty";
import Favorties from "./pages/Profile/Components/Favorties";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/loanpayment" element={<LoanPay />} />
        <Route path="/shopcard" element={<ShopCard />} />
        <Route path="profile" element={<Profile />}>
          <Route path="/profile" element={<Sections/>}/>
          <Route path="rules" element={<Rules />} />
          <Route path="coindeal" element={<CoinDeal />} />
          <Route path="golddeal" element={<GoldDeal />} />
          <Route path="payment" element={<Payment />} />
          <Route path="waranty" element={<Warranty />} />
          <Route path="branches" element={<Branches />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="favorties" element={<Favorties />} />
          <Route path="offers" element={<Critics />} />
          <Route path="questions" element={<FaQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
