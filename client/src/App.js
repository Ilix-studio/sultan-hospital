import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyles from "./Components/Styles/GLobal";
import { MdDashboard } from "react-icons/md";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminDashboard" element={<MdDashboard />} />
      </Routes>
    </>
  );
};

export default App;
