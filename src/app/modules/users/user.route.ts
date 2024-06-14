import express from 'express';
import validateRequest from '../../config/middleware/validateRequest';
import { createStudentValidationSchema } from '../students/studentValidationSchema';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
