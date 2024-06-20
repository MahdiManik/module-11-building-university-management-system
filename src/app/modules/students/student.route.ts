import express from 'express';
import { StudentControllers } from './student.controllers';
import validateRequest from '../../config/middleware/validateRequest';
import { updateStudentValidationSchema } from './studentValidationSchema';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
