import ErrorBoxComponent from "./ErrorBoxComponent";

function SelectComponent({
    label,
    name,
    value,
    formHandler,
    selecteOptions,
    errorObj
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => {
          formHandler(e);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {
            selecteOptions.map((element, index) => <option key={element}>{element}</option>)
        }
      </select>

      <ErrorBoxComponent
        errorDivId={`error_${name}`}
        errorTitleId={`error_title_${name}`}
        errorDescriptionId={`error_description_${name}`}
        errorObj={errorObj}
      />
    </div>
  );
}

export default SelectComponent;
