import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      {/* Hide the navbar */}
      <div className="logo">Sultan Hospital</div>
      <div className="Greetings">Welcome, Admin</div>
      <div className="three_box">
        <Link to="create">Create</Link>
        <Link to="totalapps">Total Todays Appointment</Link>
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
