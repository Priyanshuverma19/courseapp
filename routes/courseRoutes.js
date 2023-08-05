import express from "express";
import { getAllCourses ,createCourse,getCourseLectures,addLecture, deleteCourse, deleteLacture} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//get all courses without lecture
router.route("/courses").get(getAllCourses);
//create a new course only admin
router.route("/createcourse")
.post(isAuthenticated,authorizeAdmin,singleUpload,createCourse);
// add lecture,delete course,get course detail,


router.route("/course/:id").get(isAuthenticated,authorizeSubscribers,getCourseLectures).post(isAuthenticated,authorizeAdmin,singleUpload,addLecture).delete(isAuthenticated,authorizeAdmin,deleteLacture);
//delete lecture
router.route("/lecture")
.delete(isAuthenticated,authorizeAdmin,createCourse);
export default router;
