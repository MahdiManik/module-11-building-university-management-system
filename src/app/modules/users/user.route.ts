import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../config/middleware/validateRequest';
import createStudentValidationSchema from '../students/studentValidationSchema';

const router = express.Router();

// route of Create student
router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const userRoutes = router;
