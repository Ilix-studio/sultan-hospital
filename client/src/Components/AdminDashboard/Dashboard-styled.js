import styled from "styled-components";

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
const AdminCreateAp = styled.div`
  text-decoration: none;
  background-color: aquamarine;
  color: antiquewhite;
  font-weight: 500;
  padding: 10px;
`;
const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  border: 1px solid #dddddd;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export { TableContainer, AdminCreateAp, Table, Th, Td, Tr };
