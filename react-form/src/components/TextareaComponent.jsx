import ErrorBoxComponent from "./ErrorBoxComponent";

function TextareaComponent({ label, name, value, formHandler, placeholder, errorObj}) {
  return (
    <div className="mb-5">
      <label
        htmlFor="address"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={(e) => {
          formHandler(e);
        }}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

export default TextareaComponent;
