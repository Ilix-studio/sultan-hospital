import express from "express";
import {
  createAppointment,
  viewAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/formController";
const router = express.Router();

router.post("/create", createAppointment);
router.get("/view", viewAppointment);
router.put("/update", updateAppointment);
router.delete("/delete", deleteAppointment);

// use id in update and delete route
