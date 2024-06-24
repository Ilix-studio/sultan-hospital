import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useAuth } from "../../context/AuthProvider";
import ViewAppointments from "../Appointments/ViewAppointments";

const fetchAdmin = async (token) => {
  const { response } = await axios.get(
    "http://localhost:5000/api/admin/adminDashboard",
    {
      headers: {
        Authorization: `Bearer &{token}`,
      },
    }
  );
  return response.data;
};

const AdminDashboard = () => {
  const { authState } = useAuth();
  const { data, error, isLoading } = useQuery(
    ["admin", authState.token],
    () => fetchAdmin(authState.token),
    {
      enabled: !!authState.token,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {authState.isAuthenticated ? (
        <>
          <h1>Welcome, {data.email}</h1>
          <ViewAppointments />
        </>
      ) : (
        <h1>Unauthorized</h1>
      )}
    </div>
  );
};

export default AdminDashboard;
