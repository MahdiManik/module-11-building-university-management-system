import { studentServices } from './student.services';
import sendResponse from '../../config/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../config/utils/catchAsync';

// get all students data
const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    massage: 'All students data showed successfully',
    data: result,
  });
});

// get single student data
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    massage: 'get a single student data',
    data: result,
  });
});

// delete student data
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    massage: 'Student is created successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
