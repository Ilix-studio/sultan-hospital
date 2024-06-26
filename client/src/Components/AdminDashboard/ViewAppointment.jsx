import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { TableContainer, Table, Th, Td, Tr } from "./Dashboard-styled";
import Update from "./Update";
import Delete from "./Delete";

const fetchAppointments = async () => {
  const { data } = await axios.get("http://localhost:5000/api/form/view");
  return data;
};

const ViewAppointment = () => {
  const { data, error, isLoading } = useQuery(
    "appointments",
    fetchAppointments
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <TableContainer>
      <Table>
        <thead>
          <Tr>
            <Th>S.No.</Th>
            <Th>Name</Th>
            <Th>Phone Number</Th>
            <Th>Doctor Name</Th>
            <Th>Time Schedule</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          {data.map((appointment, index) => (
            <Tr key={appointment._id}>
              <Td>{index + 1}</Td>
              <Td>{appointment.patientName}</Td>
              <Td>{appointment.phoneNumber}</Td>
              <Td>{appointment.doctorName}</Td>
              <Td>{appointment.timeSchedule}</Td>
              <Td>{appointment.createdAt}</Td>
              <Td>
                <Update />
                <Delete />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ViewAppointment;
