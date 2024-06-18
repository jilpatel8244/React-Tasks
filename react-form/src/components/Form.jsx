import { useEffect, useState } from "react";
import {
  validateEmail,
  validatePhone,
  validatePassword,
} from "../helper/formValidation";
import InputBox from "./InputBox";
import CheckboxComponent from "./CheckboxComponent";
import RadioComponent from "./RadioComponent";
import TextareaComponent from "./TextareaComponent";
import SelectComponent from "./SelectComponent";
import ErrorBoxComponent from "./ErrorBoxComponent";
import ButtonComponent from "./ButtonComponent";
import {
  preferedOfficeLocationsData,
  genderData,
  selectedCountryOptions,
  initialFormData,
  initialFormErrorData,
} from "../helper/data";
import { useNavigate } from "react-router-dom";

function Form() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formErrorData, setFormErrorData] = useState(initialFormErrorData);

  function validateForm() {
    const formFields = [
      { name: "name", rules: ["required"] },
      { name: "email", rules: ["required", "email"] },
      { name: "phoneNumber", rules: ["required", "phone"] },
      { name: "address", rules: [] },
      { name: "password", rules: ["required", "password"] },
      { name: "confirmPassword", rules: ["required", "confirmPassword"] },
      { name: "gender", rules: ["required"] },
      { name: "selectedCountry", rules: ["required"] },
      { name: "preferedOfficeLocations", rules: ["required"] },
      { name: "profilePicture", rules: [] },
    ];

    let validate = true;

    formFields.forEach((field) => {
      let value = formData[field.name];

      let errorStatus = false;
      let fieldName = field.name;
      let errorTitle;
      let errorDescription;

      field.rules.forEach((rule) => {
        if (
          rule === "required" &&
          (typeof value === "object" ? !value?.length : !value?.trim().length)
        ) {
          validate = false;
          errorStatus = true;
          fieldName = field.name;
          errorTitle = "Required !";
          errorDescription = "field is required";
        }

        if (rule === "email" && value && !validateEmail(value)) {
          validate = false;
          errorStatus = true;
          fieldName = field.name;
          errorTitle = "Wrong !";
          errorDescription = `Please enter valid ${field.name}`;
        }

        if (rule === "phone" && value && !validatePhone(value)) {
          validate = false;
          errorStatus = true;
          fieldName = field.name;
          errorTitle = "Wrong !";
          errorDescription = `Please enter valid ${field.name}`;
        }

        if (rule === "password" && value && !validatePassword(value)) {
          validate = false;
          errorStatus = true;
          fieldName = field.name;
          errorTitle = "Wrong !";
          errorDescription = `Please enter valid password, must contains atleast 8 charecters, 1 uppercase, 1 lowwercase, 1 specialcharacter, 1 number`;
        }

        if (
          rule === "confirmPassword" &&
          value &&
          value !== formData.password
        ) {
          validate = false;
          errorStatus = true;
          fieldName = field.name;
          errorTitle = "Wrong !";
          errorDescription = `Password not match`;
        }
      });

      setFormErrorData((prevData) => {
        return {
          ...prevData,
          [fieldName]: {
            errorStatus: errorStatus,
            title: errorTitle,
            description: errorDescription,
          },
        };
      });
    });

    return validate;
  }

  function formHandler(event) {
    let { name, value, checked } = event.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: name === "rememberMe" ? checked : value,
      };
    });
  }

  function formCheckboxHandler(event) {
    let { checked, value } = event.target;

    setFormData((prevData) => {
      const newPreferedOfficeLocations = checked
        ? [...prevData.preferedOfficeLocations, value]
        : prevData.preferedOfficeLocations.filter(
            (element) => element !== value
          );

      return {
        ...prevData,
        preferedOfficeLocations: newPreferedOfficeLocations,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    setIsFormSubmitted(true);

    setLoading(true);
    if (!validateForm(formData)) {
      setLoading(false);
      return false;
    }

    setIsFormSubmitted(false);
    localStorage.setItem("user", JSON.stringify(formData));
    console.log(formData);

    setTimeout(() => {
      setLoading(false);
      navigate("/form-data");
    }, 3000);

    setFormData(initialFormData);
  }

  useEffect(() => {
    if (isFormSubmitted) {
      validateForm();
    }
  }, [formData]);

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="flex gap-5">
          <div className="w-[400px]">
            <InputBox
              type="text"
              label="Name"
              name="name"
              value={formData.name}
              formHandler={formHandler}
              placeholder="Ben Ford"
              id="name"
              errorObj={formErrorData.name}
            />
            <RadioComponent
              fieldSetName="Gender"
              data={genderData}
              type="radio"
              checked={formData.gender}
              name="gender"
              formHandler={formHandler}
              errorObj={formErrorData.gender}
            />
            <InputBox
              type="text"
              label="Email"
              name="email"
              value={formData.email}
              formHandler={formHandler}
              placeholder="benford@gmail.com"
              id="email"
              errorObj={formErrorData.email}
            />
            <InputBox
              type="number"
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              formHandler={formHandler}
              placeholder="0123456789"
              id="phoneNumber"
              errorObj={formErrorData.phoneNumber}
            />
            <TextareaComponent
              label="Address"
              name="address"
              value={formData.address}
              formHandler={formHandler}
              placeholder="D/913 Raghuvir Symphony..."
              errorObj={formErrorData.address}
            />
            <InputBox
              type="file"
              label="Upload Profile Picture"
              name="profilePicture"
              value={formData.profilePicture}
              formHandler={formHandler}
              placeholder=""
              id="profilePicture"
              errorObj={formErrorData.address}
            />
          </div>
          <div className="w-[400px] flex flex-col">
            <div>
              <SelectComponent
                label="Select your country"
                name="selectedCountry"
                value={formData.selectedCountry}
                formHandler={formHandler}
                selecteOptions={selectedCountryOptions}
                errorObj={formErrorData.selectedCountry}
              />
              <div className="mb-5">
                <fieldset className="">
                  <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select your prefered office location
                  </legend>
                  {preferedOfficeLocationsData.map((element, index) => {
                    return (
                      <CheckboxComponent
                        key={element}
                        id={`preferedOffice-option-${index}`}
                        type="checkbox"
                        label={element}
                        name="preferedOfficeLocations"
                        value={element}
                        checked={formData.preferedOfficeLocations.includes(
                          element
                        )}
                        formHandler={formCheckboxHandler}
                        placeholder=""
                      />
                    );
                  })}
                  <ErrorBoxComponent
                    errorDivId="error_preferedOfficeLocations"
                    errorTitleId="error_title_preferedOfficeLocations"
                    errorDescriptionId="error_description_preferedOfficeLocations"
                    errorObj={formErrorData.preferedOfficeLocations}
                  />
                </fieldset>
              </div>
              <InputBox
                type="password"
                label="Create password"
                name="password"
                value={formData.password}
                formHandler={formHandler}
                placeholder="create your password"
                id="password"
                errorObj={formErrorData.password}
              />
              <InputBox
                type="password"
                label="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                formHandler={formHandler}
                placeholder="confirm your password"
                id="confirmPassword"
                errorObj={formErrorData.confirmPassword}
              />
            </div>
            <div>
              <div className="flex items-start mb-5">
                <CheckboxComponent
                  id="rememberMe"
                  type="checkbox"
                  label="Remember me"
                  name="rememberMe"
                  value={formData.rememberMe}
                  checked={formData.rememberMe}
                  formHandler={formHandler}
                  placeholder=""
                />
              </div>
              <ButtonComponent
                type="submit"
                className={`${
                  loading ? "opacity-50" : "opacity-100"
                } w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                text="Submit"
                loading={loading}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
