import "./App.css";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopCard from "./pages/ShopCard/ShopCard";
import LoanPay from "./pages/LoanPay/LoanPay";
import Profile from "./pages/Profile/Profile";
import Data from "./Context/Data";

function App() {
  return (
    <Data.Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/loanpayment" element={<LoanPay />}></Route>
          <Route path="/shopcard" element={<ShopCard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </Data.Provider>
  );
}

export default App;
