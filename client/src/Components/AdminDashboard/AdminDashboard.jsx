import { Link, Outlet } from "react-router-dom";
// import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";

const AdminDashboard = () => {
  // const { axiosPrivate, axiosPrivate2, axiosPrivate3, axiosPrivate4 } =
  //   useAxiosInterceptor();

  return (
    <>
      {/* Hide the navbar */}
      <div className="logo">Sultan Hospital</div>
      <div>
        <div className="Greetings">Welcome, Admin</div>
        <div className="Logout">Logout</div>
      </div>

      <div className="three_box">
        <Link to="create">Create</Link>
        <Link to="totalappsToday">Total Todays Appointment</Link>
        <Link to="allAppoint">Total Appointment till now</Link>
      </div>
      <div>
        <Link to="viewTodays">View Todays Appointment</Link>
      </div>
      <Outlet />
    </>
  );
};

export default AdminDashboard;

//create new route in backend to view todays appointment by date
