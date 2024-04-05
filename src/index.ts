import dotenv from "dotenv";
import express from "express";
import { userRouter } from "./route/user.route";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/v1", userRouter);
app.listen(3000, () => {
  console.log("App listening in the port 3000");
});
