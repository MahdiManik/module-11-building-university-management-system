import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
import { NextFunction } from 'express';

export const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  needPasswordChange: {
    type: Boolean,
  },
  role: {
    type: String,
    enum: {
      values: ['admin', 'student', 'faculty'],
      required: true,
    },
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// set bcrypt for password

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// set password is "" after save
userSchema.post(
  'save',
  function (doc: { password: string }, next: NextFunction) {
    doc.password = '';
    next();
  },
);

userSchema.pre('find', function (next: NextFunction) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// model

export const User = model<TUser>('User', userSchema);
