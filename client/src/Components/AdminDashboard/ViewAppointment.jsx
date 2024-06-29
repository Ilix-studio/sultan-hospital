import React from "react";
import { useQuery } from "react-query";
import { TableContainer, Table, Th, Td, Tr } from "./Dashboard-styled";
import Update from "./Update";
import Delete from "./Delete";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";

const ViewAppointment = () => {
  const { axiosPrivate } = useAxiosInterceptor();

  const fetchAppointments = async () => {
    const { data } = await axiosPrivate.get(
      "http://localhost:5000/api/form/todays-appointments"
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
