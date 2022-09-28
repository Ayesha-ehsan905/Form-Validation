import * as yup from "yup";
const SignupSchema = yup.object().shape({
  FirstName: yup
    .string()
    .required()
    .matches(/^[(\w\w+)\s(\w+)]+$/, "Only Alphabets")
    .min(3),
  Email: yup.string().required(),
  PhoneNumber: yup.string().required().max(12),
  // .matches(/^[[1-9]{4}-[1-9]{6}]+$/, "Phone Number Format xxxx-xxxxxx"),

  DOB: yup.string().required("DOB is a required field"),
  Country: yup.string().required(),
  Address: yup.string().required().min(8).max(80),
  Code: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  Gender: yup.boolean().required(),
});

export default SignupSchema;
