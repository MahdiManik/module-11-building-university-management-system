import { Router } from 'express';
import { userRoutes } from '../../modules/users/user.route';
import { studentRoutes } from '../../modules/students/student.route';
import { AcademicSemesterRoutes } from '../../modules/academicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
