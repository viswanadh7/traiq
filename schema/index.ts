import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must not exceed 15 characters")
    .trim()
    .required("Please enter your name to continue"),
  email: yup
    .string()
    .required("Email is a required field")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please enter a valid email address"
    )
    .trim(),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Please choose a strong password"
    )
    .trim()
    .required("Password is a required field"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().trim().required("Email address cannot be empty"),
  password: yup.string().trim().required("Password cannot be empty"),
});
