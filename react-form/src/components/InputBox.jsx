import ErrorBoxComponent from "./ErrorBoxComponent";
import InputComponent from "./InputComponent";
import Label from "./Label";

function InputBox({
  type,
  label,
  name,
  value,
  formHandler,
  placeholder,
  id,
  errorObj
}) {
  return (
    <div className="mb-5">
      <Label
        id={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        label={label}
      />

      <InputComponent
        type={type} 
        name={name}
        id={id}
        value={value}
        formHandler={formHandler}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />

      <ErrorBoxComponent
        errorDivId={`error_${name}`}
        errorTitleId={`error_title_${name}`}
        errorDescriptionId={`error_description_${name}`}
        errorObj={errorObj}
      />
    </div>
  );
}

export default InputBox;
