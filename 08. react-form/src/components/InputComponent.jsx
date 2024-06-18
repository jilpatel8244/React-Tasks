function InputComponent({type, name, id, value, formHandler, className, placeholder}) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => {
          formHandler(e);
        }}
        className={className}
        placeholder={placeholder}
      />

      {name === "profilePicture" && (
        <div
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="user_avatar_help"
        >
          A profile picture is useful to confirm you are logged into your
          account
        </div>
      )}
    </>
  );
}

export default InputComponent;
