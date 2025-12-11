import express from "express";
import { 
  addEvent, 
  deleteEvent, 
  getAllEvents, 
  searchEvent, 
  getEventById 
} from "../controllers/eventControllers.js"; 

const router = express.Router();

router.post("/", addEvent);
router.get("/search", searchEvent); 
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.delete("/:judul", deleteEvent);

export default router;
