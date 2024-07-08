import styled from "styled-components";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #ffffff;
  border-radius: 24px;
`;

const Logo = styled.div`
  h1 {
    font-size: 1.3rem;
    color: #333;
  }
`;

const LogoutButton = styled.button`
  width: 130px;
  height: 50px;
  border: 1px solid #f15412;
  border-radius: 35px;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 350;
  color: black;
`;

const Main = styled.main`
  .welcome-message {
    h2 {
      font-size: 36px;
      font-weight: 700;
    }
    p {
      color: #04529b;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  height: 152px;
  padding: 24px;
  background: #2b3467;
  color: #bad7e9;
  border-radius: 12px;
  overflow: hidden;
  border-top: 1px solid rgb(2, 2, 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 2px solid #bad7e9;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Count = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  z-index: 1;

  .bold {
    font-weight: 700;
  }
`;

const TableContainer = styled.div`
  padding-top: 20px;
`;

const Table = styled.table`
  font-family: "Plus Jakarta Sans", sans-serif;
  border-collapse: collapse;
  width: 100%;
`;
const Td = styled.td`
  border: 1px solid #da1212;
  text-align: left;
  padding: 8px;
`;
const Th = styled.th`
  border: 1px solid #da1212;
  text-align: left;
  padding: 8px;
`;

export {
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
  TableContainer,
  Table,
  Th,
  Td,
};
