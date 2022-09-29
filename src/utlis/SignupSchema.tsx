import * as yup from "yup";
const SignupSchema = yup.object().shape({
  FirstName: yup
    .string()
    .required()
    .matches(/^[(A-Za-z)\s(A-Za-z)]+$/, "Only Alphabets")
    .min(3),
  Email: yup.string().required(),
  PhoneNumber: yup
    .string()
    .required()
    .max(12)
    .min(12)
    .matches(/[0-9]{4}-[0-9]{7}/, "Phone Number Format xxxx xxxxxxx"),
  //   /[0-9]{4}-[0-9]{7}
  DOB: yup.string().required("DOB is a required field"),
  Country: yup.string().required(),
  Address: yup.string().required().min(8).max(80),
  Code: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  // Gender: yup.character().required(),
});

export default SignupSchema;
