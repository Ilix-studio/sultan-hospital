import React from "react";
import { Container, TableContainer, Table, Th, Td } from "./Dashboard-styled";
import { useQuery } from "react-query";
import Update from "./Update";
import Delete from "./Delete";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";

const TodaysTotalAppointments = () => {
  const { axiosPrivate } = useAxiosInterceptor();

  const fetchAppointments = async () => {
    const { data } = await axiosPrivate.get(
      "http://localhost:5000/api/form/view"
    );
    return data;
  };

  const { data, error, isLoading } = useQuery(
    "appointments",
    fetchAppointments
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  //add react hot toast to show error message
  return (
    <Container>
      <TableContainer>
        <h2>Today Appointments</h2>
        <Table>
          <thead>
            <tr>
              <Th>S.No.</Th>
              <Th>Name</Th>
              <Th>Phone Number</Th>

              <Th>Time Schedule</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((appointment, index) => (
              <tr key={appointment._id}>
                <Td>{index + 1}</Td>
                <Td>{appointment.patientName}</Td>
                <Td>{appointment.phoneNumber}</Td>
                <Td>{appointment.timeSchedule}</Td>
                <Td>{appointment.createdAt}</Td>
                <Td>
                  <Update />
                  <Delete />
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TodaysTotalAppointments;
