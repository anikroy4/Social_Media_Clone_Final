import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fName: Yup.string().min(3).max (25).required("First name is required"),
  lName: Yup.string().min(3).max (25).required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),   
  bDay: Yup.string().required("Day is required"),
  bMonth: Yup.string().required("Month is required"),
  bYear: Yup.string().required("Year is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string().min(8).max(25).required("Password is required"),

});

