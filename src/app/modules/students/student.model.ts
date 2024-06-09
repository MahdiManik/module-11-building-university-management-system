import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  TStudent,
  TParent,
  TUserName,
  StudentMOdel,
} from './student.interface';

const nameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: 20,
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not capitalize format',
    },
  },
  middleName: {
    type: String,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    maxlength: [20, 'Last Name can not be more than 20 characters'],
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} in not valid',
    },
  },
});

const parentSchema = new Schema<TParent>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
  },

  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact no is required'],
  },
  matherName: {
    type: String,
    required: [true, 'Mather name is required'],
  },
  matherOccupation: {
    type: String,
    required: [true, 'Mather occupation is required'],
  },
  matherContactNo: {
    type: String,
    required: [true, 'Mather contact no is required'],
  },
});

export const studentSchema = new Schema<TStudent, StudentMOdel>({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'user is required for _id'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: nameSchema,
    required: true,
  },

  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} in not valid email',
    },
  },

  avatar: {
    type: String,
    required: [true, 'avatar is required'],
  },
  dateOfBirth: String,

  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },

  parent: {
    type: parentSchema,
    required: true,
  },
});

studentSchema.statics.isUserExist = async function (id: string) {
  const existingUser = Student.findOne({ id });
  return existingUser;
};

// model
export const Student = model<TStudent, StudentMOdel>('Student', studentSchema);
