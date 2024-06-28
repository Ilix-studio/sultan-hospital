import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appointmentFormRoute from "./routes/appointmentFormRoute.js";
import loginRoutes from "./routes/loginRoute.js";
import { errorHandler, routeNotFound } from "./middleware/errorMiddleware.js";
import connectDB from "./mongoDb/connection.js";
import cookieParser from "cookie-parser";
import seedAdmin from "./AdminPrivilege/seeder.js";

dotenv.config();

const port =5000;

const startServer = async () => {
  // Initialize express app
  const app = express();

  // Use middleware
  app.use(express.json({ limit: "30mb" }));
  app.use(express.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());
  app.use(cookieParser());

  // Routes
  app.use("/api/form", appointmentFormRoute);
  app.use("/api/admin", loginRoutes);

  // Root route
  app.get("/", (req, res) => res.send("server is ready"));

  // Error handling middleware
  app.use(routeNotFound);
  app.use(errorHandler);

  // Connect to the database and seed admin
  try {
    await connectDB();
    await seedAdmin();

    // Start the server
    app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();


