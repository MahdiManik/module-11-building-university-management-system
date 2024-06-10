import sendResponse from '../../config/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../config/utils/catchAsync';
import { UserServices } from './user.service';

// create a student data
const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    massage: 'Student is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
