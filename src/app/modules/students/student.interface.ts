import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TParent = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  matherName: string;
  matherOccupation: string;
  matherContactNo: string;
};

export type TStudent = {
  user: Types.ObjectId;
  name: TUserName;
  email: string;
  avatar: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  parent: TParent;
};

// for creating static method

export interface StudentMOdel extends Model<TStudent> {
  isUserExist(id: string): Promise<TStudent | null>;
}
