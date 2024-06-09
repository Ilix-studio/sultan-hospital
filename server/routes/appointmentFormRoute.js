import express from "express";
import {
  createAppointment,
  viewAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/formController.js";
import verifyJWT from "../middleware/verifyJwt.js";
const router = express.Router();

router.post("/create", createAppointment);
router.get("/view", viewAppointment, verifyJWT);
router.put("/update", updateAppointment, verifyJWT);
router.delete("/delete", deleteAppointment, verifyJWT);

// use id in update and delete route
export default router;
