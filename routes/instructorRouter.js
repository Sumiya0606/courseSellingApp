import express from "express";
import {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/courseController.js";
import upload from "../middlewares/upload-midlleware.js";
import {
  getAllInstructors,
  singin,
  singup,
} from "../controllers/instructorController.js";

const instructorRouter = express.Router();

instructorRouter.post("/signup", singup);
instructorRouter.post("/signin", singin);

instructorRouter.get("/get-courses", getCourses);
instructorRouter.get("/get-instructors", getAllInstructors);

instructorRouter.post("/add-courses", upload.single("image"), createCourse);

instructorRouter.put("/update-courses/:id", updateCourse);

instructorRouter.delete("/delete-instructors/:id", deleteCourse);

export default instructorRouter;
