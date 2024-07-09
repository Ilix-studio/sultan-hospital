import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  LogoutButton,
  Main,
  CardContainer,
  Card,
  CardContent,
  Count,
  Description,
} from "./Dashboard-styled";

// import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";

const AdminDashboard = () => {
  // const { axiosPrivate, axiosPrivate2, axiosPrivate3, axiosPrivate4 } =
  //   useAxiosInterceptor();

  return (
    <>
      <Container>
        <Header>
          <Logo>
            <h1>Sultan Hospital</h1>
          </Logo>
          <LogoutButton>Log out</LogoutButton>
        </Header>
        <Main>
          <div className="welcome-message">
            <h2>Welcome, Admin</h2>
            <p>Start the day with managing new appointments</p>
          </div>
        </Main>
        <CardContainer>
          <Card>
            <CardContent>
              <Count>create</Count>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Count>32</Count>
            </CardContent>
            <Description>Total</Description>
          </Card>
          <Card>
            <CardContent>
              <Count>56</Count>
            </CardContent>
            <Description>Total</Description>
          </Card>
        </CardContainer>
      </Container>

      <Outlet />
    </>
  );
};

export default AdminDashboard;

//create new route in backend to view todays appointment by date
