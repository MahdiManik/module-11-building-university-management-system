import { userServices } from './user.service';
import sendResponse from '../../config/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../config/utils/catchAsync';

// create a student data
const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await userServices.createStudentIntoDB(password, studentData);

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
