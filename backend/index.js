import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/Contact.js"
import userRoutes from "./routes/User.js"
import eventRoutes from "./routes/Event.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.json());
app.use(cors());

app.use("/contact", contactRoutes);
app.use("/user", userRoutes);
app.use("/event",eventRoutes);

app.listen(PORT,()=>{
    console.log("server start at port ",PORT);
})
