import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'id must be a string',
    })
    .max(20, {
      message: 'password not be more then 20 characters',
    })
    .optional(),
});

export default userValidationSchema;
