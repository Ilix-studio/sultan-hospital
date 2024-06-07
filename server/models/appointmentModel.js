import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    guardianName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      ref: "Doctor",
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
