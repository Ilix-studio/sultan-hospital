import express from "express";
import { loginAdmin, refresh, logout } from "../controllers/loginController.js";
import verifyJWT from "../middleware/verifyJwt.js";

const router = express.Router();

router.post("/login", loginAdmin, verifyJWT);
router.get("/refresh", refresh, verifyJWT);
router.post("/logout", logout);

export default router;
