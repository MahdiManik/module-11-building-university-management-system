import httpStatus from 'http-status';
import catchAsync from '../../config/utils/catchAsync';
import { UserServices } from './user.service';
import sendResponse from '../../config/utils/sendResponse';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created success fully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
