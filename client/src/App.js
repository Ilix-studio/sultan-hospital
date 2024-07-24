import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import NoMatch from "./Components/NoMatch";
import CreateAppointment from "./Components/AdminDashboard/CreateAppointment";
import LoginPage from "./Components/LoginPage/LoginPage";
import GlobalStyles from "./Components/Styles/GLobal";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />}/>
        <Route path="/create" element={<CreateAppointment />}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App;





