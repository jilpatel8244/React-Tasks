function Label({id, className, label}) {
  return (
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
  );
}

export default Label;
