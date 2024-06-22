import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./Components/LoginPage/LoginPage";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyles from "./Components/Styles/GLobal";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        {/* <Route path="/" element for home, about, service /> */}
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
