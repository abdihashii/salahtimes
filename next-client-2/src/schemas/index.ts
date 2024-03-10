import * as zod from 'zod';

export const signInFormSchema = zod.object({
  name: zod
    .string()
    .min(2, {
      message: 'Please make sure the name is at least 2 characters long',
    })
    .max(50),
  email: zod
    .string()
    .min(1, {
      message: 'Please enter an email address',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  phone: zod
    .string()
    .optional()
    .refine(
      (data) => {
        if (data === undefined || data.trim().length === 0) return true; // No error if empty
        if (data.trim().length < 10) return false; // Error if less than 10 digits
        if (data.trim().length > 15) return false; // Error if more than 15 digits
        return true; // No error if within range
      },
      {
        message: 'Phone number must be between 10 and 15 digits long',
      }
    ),
  message: zod.string().min(1, {
    message: 'Please enter a message',
  }),
});
