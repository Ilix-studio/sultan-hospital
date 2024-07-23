import HealthServices from './HealthServices/HealthServices'
import Departments from './Departments/Departments'
import BottomContainer from './BottomContainer/BottomContainer'
import Heading from './Heading/Heading'
import Navbar from './Navbar/Navbar'
// import Cards from "./CreateAppointment/Cards"
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      {/* <Cards /> */}

      <HealthServices />
      <Departments />
      <BottomContainer />
      <Footer />
    </>
  )
}

export default Home
