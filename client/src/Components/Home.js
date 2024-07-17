import Box1 from "./Box1/Box1";
import Box2 from "./Departments/Box2";
import Box3 from "./Box3/Box3";
import Cards from "./CreateAppointment/Cards";
import Heading from "./Heading/Heading";
import Navbar from "./Navbar/Navbar";

import Footer from "./Footer/Footer";

import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <Cards />
      <div className="features-and-departments">
        <Box1 />
        <Box2 />
      </div>
      <Box3 />
      <Footer />
      {/* <GlobalStyles /> */}
    </>
  );
};

export default Home;
