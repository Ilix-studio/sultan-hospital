import HealthServices from "./HealthServices/HealthServices";
import Departments from "./Departments/Departments";
import TopContainer from "./TopContainer/TopContainer";

import Heading from "./Heading/Heading";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import "./home.css";
import Counter from "./Counter/Counter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <TopContainer />
      <HealthServices />
      <Departments />
      <Counter />
      <Footer />
    </>
  );
};

export default Home;
