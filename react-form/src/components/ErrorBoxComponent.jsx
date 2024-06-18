function ErrorBoxComponent({
  errorDivId,
  errorTitleId,
  errorDescriptionId,
  errorObj
}) {
  return (
    <div
      id={errorDivId}
      className={`${!errorObj.errorStatus ? 'hidden' : 'flex'}  flex-col p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`}
      role="alert"
    >
      <span id={errorTitleId} className="font-medium">
        {errorObj.title}
      </span>
      <span id={errorDescriptionId}>{errorObj.description}</span>
    </div>
  );
}

export default ErrorBoxComponent;
