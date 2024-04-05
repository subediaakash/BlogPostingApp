import "./env";
import express from "express";
import { userRouter } from "./route/user.route";
const app = express();

app.use(express.json());
app.use("/v1", userRouter);
app.listen(3000, () => {
  console.log("App listening in the port 3000");
});
