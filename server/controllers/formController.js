import asyncHandler from "express-async-handler";
import Appointment from "../models/appointmentModel.js";

// View today's appointments
// GET Request - /api/form/todays-appointments
// Private
const viewTodaysAppointments = asyncHandler(async (req, res) => {
  const today = new Date().toISOString().split('T')[0]; 
  let query = Appointment.find().where("date").equals(today);

  const todaysAppointments = await query.exec();

  if (!todaysAppointments || todaysAppointments.length === 0) {
    res.status(404).json({ message: "No appointments found for today" });
  } else {
    res.status(200).json(todaysAppointments);
  }
});

//view all appointment
//GET Request - /api/form/view
//Private
const viewAppointment = asyncHandler(async (req, res) => {
  const { date, sortBy, filterBy } = req.query;
  let query = Appointment.find();
  if (date) {
    query = query.where("date").equals(date);
  }
  if (filterBy) {
    query = query.find(filter);
  }
  if (sortBy) {
    query = query.sort(sortBy);
  }
  const allAppointments = await query.exec();
  res.status(200).json(allAppointments);

  if (!allAppointments) {
    res.status(500);
    throw new Error("Server Error");
  }
});

//Create appointment
//POST Request - /api/form/create
//Public

const createAppointment = asyncHandler(async (req, res) => {
  const {
    patientName,
    phoneNumber,
    timeSchedule,
    date,
  } = req.body;

  // Confirm data
  if (
    !patientName ||
    !date ||
    !phoneNumber ||
    !timeSchedule
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newAppointment = new Appointment({
    patientName,
    phoneNumber,
    timeSchedule,
    date,
  });
  const appointmentCreated = await newAppointment.save();
  res.status(201).json(appointmentCreated);

  if (!appointmentCreated) {
    res.status(500);
    throw new Error("problem with database or mongoose code");
  }
});

//update an appointment
//PUT Request - /api/form/update
//private
const updateAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    patientName,
    phoneNumber,
    timeSchedule,
    date,
  } = req.body;
  const appointment = await Appointment.findOneAndUpdate(
    { _id: id },
    {
      patientName,
      phoneNumber,
      timeSchedule,
      date,
    },
    { new: true }
  );
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

// delete appointment
//DEL Request - /api/form/delete
//private
const deleteAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const appointment = await Appointment.findById(id);

  if (appointment) {
    await appointment.deleteOne();
    res.json({ message: "Appointment removed" });
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

export {
  viewTodaysAppointments,
  createAppointment,
  viewAppointment,
  updateAppointment,
  deleteAppointment,
};

// a user Request for update : its a feature
