import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OurTeam from "./pages/OurTeam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import { useEffect, useState } from "react";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Login from "./pages/dashboard/Login";
import Member from "./pages/dashboard/Member";
function App() {
  const [subDomain, setSubDomain] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const host = window.location.host;
    const arr = host.split(".").slice(0, 1);
    if (arr.length > 0) {
      if (arr[0] == "admin") setIsAdmin(true);
      setSubDomain(arr[0]);
    }
    setIsLoggedIn(localStorage.getItem("isAuthenticated") ? true : false);
  }, []);

  return (
    <BrowserRouter>
      {isAdmin ? (
        isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route
              path="/member/:memberId"
              element={() => <Member shopData={"f"} />}
            />
          </Routes>
        )
      ) : (
        <>
          {" "}
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
