import express from "express";
import userRoutes from "./routes/User.routes";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/arts",userRoutes);
app.use("/votes",userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});