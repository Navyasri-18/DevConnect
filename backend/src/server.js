import "dotenv/config";
import express from "express";
import path from "path";
import cors from "cors";

import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import executeRoutes from "./routes/executeRoute.js";

console.log("ENV.CLIENT_URL:", ENV.CLIENT_URL);

const app = express();
const __dirname = path.resolve();

app.use(express.json());
    const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:5174",
      ENV.CLIENT_URL,
    ].filter(Boolean);
    app.use(
      cors({
        origin(origin, callback) {
          // allow non-browser tools (no origin) and any allowed dev origin
          if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
          return callback(new Error(`Not allowed by CORS: ${origin}`));
        },
        credentials: true,
      })
    );
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/execute", executeRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

//Make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server running on port :", ENV.PORT);
    });
  } catch (error) {
    console.error("❌ Failed to start server : ", error);
  }
};
startServer();
