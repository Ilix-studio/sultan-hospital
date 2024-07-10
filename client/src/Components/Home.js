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
      <div className="flex w-4/5 mx-auto mt-28">
        <Heading />
        <Cards />
      </div>
      <Box />
      <div className="flex justify-around mt-20 mb-10">
        <Box1 />
        <Box2 />
      </div>
      <Box3 />
    </>
  );
};

export default Home;
