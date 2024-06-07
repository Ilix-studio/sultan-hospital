import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appointmentFormRoute from "./routes/appointmentFormRoute.js";
import { errorHandler, routeNotFound } from "./middleware/errorMiddleware.js";
import connectDB from "./mongoDb/connection.js";
import seedAdmin from "./AdminPrivilege/seeder.js";
const port = 5000;

dotenv.config();

const app = express();
//use middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/form", appointmentFormRoute);
app.use(routeNotFound);
app.use(errorHandler);

connectDB();
seedAdmin();

app.get("/", (req, res) => res.send("server is ready"));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
