import Box1 from "./Box1/Box1";
import Box2 from "./Departments/Box2";
import Box3 from "./Box3/Box3";

import Heading from "./Heading/Heading";
import Navbar from "./Navbar/Navbar";
// import Cards from "./CreateAppointment/Cards"
import Footer from "./Footer/Footer";
import AppForm from "./Appointment/appForm";


const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      {/* <Cards /> */}
      <AppForm/>
      <Box1 />
      <Box2 />
      <Box3 />
      <Footer />
    </>
  );
};

export default Home;
