import HealthServices from "./HealthServices/HealthServices";
import Departments from "./Departments/Departments";
import TopContainer from "./TopContainer/TopContainer";

import Heading from "./Heading/Heading";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import "./home.css";
import Counter from "./Counter/Counter";
import ServiceCard from "./3DServiceCard/ServiceCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <Counter />
      <ServiceCard />
      <TopContainer />
      <HealthServices />
      <Departments />
      <Footer />
    </>
  );
};

export default Home;
