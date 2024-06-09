import { Router } from 'express';
import { userRoutes } from '../../modules/users/user.route';
import { studentRoutes } from '../../modules/students/student.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
