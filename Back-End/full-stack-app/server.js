// Back End Server File (Express Server)

import express from "express";
import next from "next";
import handleConnectDB from "./config/db.js";

const dev = process.env.NODE_ENV != "production";

const nextApp = next({ dev: dev });

const handle = nextApp.getRequestHandler();
const PORT = process.env.PORT || 3000;

nextApp.prepare().then(async () => {
  // Db connect kro...!
  await handleConnectDB();

  // Express ka server create kro...!
  const app = express();

  // Middlewares...!
  app.use(express.json());

  // Test api...!
  app.get("/api/test", (req, res) => {
    res.send({
      status: true,
      message: "Test api called successfully!",
    });
  });

  // Baqi requests jo b aye wo next js handle kro...!
  app.use((req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
