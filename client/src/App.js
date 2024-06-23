import Cards from "./Components/Cards/Cards";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyles from "./Components/Styles/GLobal";
import Heading from "./Components/Heading/Heading";
import Box from "./Components/Box/Box";
import Box1 from "./Components/Box1/Box1";
import Box2 from "./Components/Box2/Box2";
import Box3 from "./Components/Box3/Box3";
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Heading />
      <Cards />
      < Box />
      < Box1 />
      < Box2 />
      < Box3 />
    </>
  );
};

export default App;
