import Box from "./Box/Box";
import Box1 from "./Box1/Box1";
import Box2 from "./Box2/Box2";
import Box3 from "./Box3/Box3";
import Cards from "./Cards/Cards";
import Heading from "./Heading/Heading";
import Navbar from "./Navbar/Navbar";
import GlobalStyles from "./Styles/GLobal";

const Home = () => {
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
      </>
    );
  };
  
  export default Home;