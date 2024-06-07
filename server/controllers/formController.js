import asyncHandler from "express-async-handler";

//Create appointment
//POST Request - /api/form/create
//Public

const createAppointment = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " Appointment Created" });
});

//view all appointment
//GET Request - /api/form/view
//Private
const viewAppointment = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "View appointment" });
});

//update appointment
//PUT Request - /api/form/update
//private
const updateAppointment = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update appointment" });
});

// delete appointment
//DEL Request - /api/form/delete
//private
const deleteAppointment = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete appointment" });
});

export {
  createAppointment,
  viewAppointment,
  updateAppointment,
  deleteAppointment,
};

// a user Request for update : its a feature
