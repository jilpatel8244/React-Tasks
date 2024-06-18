import ErrorBoxComponent from "./ErrorBoxComponent";

function RadioComponent({
  fieldSetName,
  data,
  type,
  checked,
  name,
  formHandler,
  errorObj
}) {
  return (
    <div className="mb-5">
      <fieldset className="flex gap-2">
        <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {fieldSetName}
        </legend>

        {data.map((element, index) => {
          return (
            <div key={element} className="flex items-center">
              <input
                id={`${name}-option-${index}`}
                type={type}
                checked={(checked === element) ? true : false}
                name={name}
                value={element}
                onChange={(e) => {
                  formHandler(e);
                }}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`${name}-option-${index}`}
                className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {element}
              </label>
            </div>
          );
        })}
      </fieldset>

      <ErrorBoxComponent
        errorDivId={`error_${name}`}
        errorTitleId={`error_title_${name}`}
        errorDescriptionId={`error_description_${name}`}
        errorObj={errorObj}
      />
    </div>
  );
}

export default RadioComponent;
