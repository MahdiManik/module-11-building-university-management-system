import express from 'express';
import { StudentControllers } from './student.controllers';

const router = express.Router();

router.get('/:semesterIdId', StudentControllers.getSingleStudent);

router.delete('/:semesterIdId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
