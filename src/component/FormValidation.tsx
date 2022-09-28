import "./Style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupSchema from "../utlis/SignupSchema";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className=" header">Enter Your Details</label>
          <div className="formbold-mb-5">
            <label htmlFor="name" className="formbold-form-label">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("FirstName")}
              className="formbold-form-input"
              style={{
                border: errors.FirstName
                  ? "1px solid red"
                  : "1px solid #e0e0e0",
              }}
            />
            {errors.FirstName && (
              <p className="Error">{errors.FirstName.message}</p>
            )}
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="phone" className="formbold-form-label">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your Phone number"
              className="formbold-form-input"
              {...register("PhoneNumber")}
              style={{
                border: errors.PhoneNumber
                  ? "1px solid red"
                  : "1px solid #e0e0e0",
              }}
            />
            {errors.PhoneNumber && (
              <p className="Error">{errors.PhoneNumber.message}</p>
            )}
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="email" className="formbold-form-label">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="formbold-form-input"
              {...register("Email")}
              style={{
                border: errors.Email ? "1px solid red" : "1px solid #e0e0e0",
              }}
            />
            {errors.Email && <p className="Error">{errors.Email.message}</p>}
          </div>
          <div className="flex flex-wrap formbold--mx-3">
            <div className="w-full sm:w-half formbold-px-3">
              <div className="formbold-mb-5 w-full">
                <label htmlFor="date" className="formbold-form-label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  className="formbold-form-input"
                  {...register("DOB")}
                  style={{
                    border: errors.DOB ? "1px solid red" : "1px solid #e0e0e0",
                  }}
                />
                {errors.DOB && <p className="Error">{errors.DOB.message}</p>}
              </div>
            </div>
          </div>

          <div className="formbold-mb-5 formbold-pt-3">
            <label className="formbold-form-label formbold-form-label-2">
              Address Details
            </label>
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <select
                    {...register("Country")}
                    placeholder="Enter Country"
                    className="formbold-form-input"
                    style={{
                      border: errors.Country
                        ? "1px solid red"
                        : "1px solid #e0e0e0",
                    }}
                  >
                    <option value="">Please Select</option>
                    <option value="Pak">Pakistan</option>
                    <option value="US">US</option>
                  </select>
                  {errors.Country && (
                    <p className="Error">{errors.Country.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="formbold-form-input"
                    {...register("Address")}
                    style={{
                      border: errors.Address
                        ? "1px solid red"
                        : "1px solid #e0e0e0",
                    }}
                  />
                  {errors.Address && (
                    <p className="Error">{errors.Address.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    placeholder="Enter ZipCode"
                    className="formbold-form-input"
                    {...register("Code")}
                    style={{
                      border: errors.Code
                        ? "1px solid red"
                        : "1px solid #e0e0e0",
                    }}
                  />
                  {errors.Code && (
                    <p className="Error">{errors.Code.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="formbold-mb-5 formbold-pt-3">
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="radio"
                    {...register("Gender")}
                    name="gender"
                    value="true"
                  />
                  <label htmlFor="">Female</label>
                  {errors.Gender && (
                    <p className="Error">{errors.Gender.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="radio"
                    {...register("Gender")}
                    name="gender"
                    value="true"
                  />
                  <label htmlFor="">Male</label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="formbold-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
