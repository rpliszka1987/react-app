import { useState } from "react";

function useInputInfo(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (value) => setValue(value.target.value),
    },
    () => setValue(initialValue),
  ];
}

function NameFormCustom() {
  const [firstNameProps, resetFirstName] = useInputInfo("");
  const [lastNameProps, resetLastName] = useInputInfo("");
  const submit = (value) => {
    value.preventDefault();
    alert(`Welcome ${firstNameProps.value} ${lastNameProps.value}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...firstNameProps}
        type="text"
        placeholder="Enter First Name..."
      />
      <input {...lastNameProps} type="text" placeholder="Enter Last Name..." />
      <button>Submit</button>
    </form>
  );
}

export default NameFormCustom;
