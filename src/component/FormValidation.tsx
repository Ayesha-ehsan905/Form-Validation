import "./Style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupSchema from "../utlis/SignupSchema";
import { useState } from "react";
import { content, AdressContent, SelectCountry } from "../static/Inputs";

const FormValidation = () => {
  const [gender, setgender] = useState(null);
  const [isSubmit, setsubmit] = useState(false);
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
  const handleClick = () => {
    setsubmit(true);
    console.log(gender);
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className=" header">Enter Your Details</label>
          {content.inputs.map((item) => {
            return (
              <div className="formbold-mb-5">
                <label htmlFor="name" className="formbold-form-label">
                  {item.label}
                </label>
                <input
                  type={item.type}
                  placeholder={item.label}
                  {...register(item.name)}
                  className="formbold-form-input"
                  style={{
                    border: errors[item.name]
                      ? "1px solid red"
                      : "1px solid #e0e0e0",
                  }}
                />
                {errors[item.name] && (
                  <p className="Error">{errors[item.name].message}</p>
                )}
              </div>
            );
          })}

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
              {AdressContent.inputs.map((item) => {
                return (
                  <div className="w-full sm:w-half formbold-px-3">
                    <div className="formbold-mb-5">
                      <input
                        type={item.type}
                        placeholder={item.label}
                        className="formbold-form-input"
                        {...register(item.name)}
                        style={{
                          border: errors[item.name]
                            ? "1px solid red"
                            : "1px solid #e0e0e0",
                        }}
                      />
                      {errors[item.name] && (
                        <p className="Error">{errors[item.name].message}</p>
                      )}
                    </div>
                  </div>
                );
              })}
              ;
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
                    value="Female"
                    onChange={(e) => setgender(e.target.value)}
                  />
                  <label htmlFor="" style={{ marginRight: "30px" }}>
                    Female
                  </label>
                  <input
                    type="radio"
                    {...register("Gender")}
                    name="gender"
                    value="Male"
                    onChange={(e) => setgender(e.target.value)}
                  />
                  <label htmlFor="">Male</label>

                  {isSubmit ? (
                    gender == null ? (
                      <p className="Error">Gender Field Is Required</p>
                    ) : (
                      <p></p>
                    )
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="formbold-btn" onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
