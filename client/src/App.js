import Cards from "./Components/Cards/Cards";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyles from "./Components/Styles/GLobal";
import Heading from "./Components/Heading/Heading";
import Box from "./Components/Box/Box";
import Box1 from "./Components/Box1/Box1";
import Box2 from "./Components/Box2/Box2";
import Box3 from "./Components/Box3/Box3";

import { Route, Routes } from "react-router-dom";

import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import ViewAppointment from "./Components/AdminDashboard/ViewAppointment";
import CreateAppointment from "./Components/AdminDashboard/CreateAppointment";

import NoMatch from "./Components/NoMatch";
import TodaysTotalAppointments from "./Components/AdminDashboard/TodaysTotalAppointments";
import AllAppointmentsCount from "./Components/AdminDashboard/AllAppointmentsCount";
import Update from "./Components/AdminDashboard/Update";
import Delete from "./Components/AdminDashboard/Delete";
import LoginPage from "./Components/LoginPage/LoginPage";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Heading />
      <Cards />
      <Box />
      <Box1 />
      <Box2 />
      <Box3 />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route path="create" element={<CreateAppointment />} />
          <Route path="totalapps" element={<TodaysTotalAppointments />} />
          <Route path="allAppoint" element={<AllAppointmentsCount />} />
          <Route index element={<AllAppointmentsCount />} />
          <Route path="viewTodays" element={<ViewAppointment />}>
            <Route path="update" element={<Update />} />
            <Route path="delete" element={<Delete />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
