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
router.put("/update/:id", updateAppointment, verifyJWT);
router.delete("/delete/:id", deleteAppointment, verifyJWT);

// use id in update and delete route
export default router;
