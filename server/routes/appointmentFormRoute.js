import express from 'express'
import {
  createAppointment,
  viewAppointment,
  updateAppointment,
  deleteAppointment,
  viewTodaysAppointments,
} from '../controllers/formController.js'
import verifyJWT from '../middleware/verifyJwt.js'
const router = express.Router()

router.post('/create', createAppointment)
router.get('/todays-appointments', verifyJWT, viewTodaysAppointments)
router.get('/view', verifyJWT, viewAppointment)
router.put('/update/:id', verifyJWT, updateAppointment)
router.delete('/delete/:id', verifyJWT, deleteAppointment)

// use id in update and delete route
export default router
