import "./App.css";
import { useState } from "react";

// Created a custom hook named useInput that takes in one parameter initialValue
function useInput(initialValue) {

  const [value, setValue] =
    useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function FormCustom() {
    // Calling the custom hook on the title and color property 
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] =
    useInput("#000000");
  const submit = (e) => {
    // Prevents default browser refresh on form submit
    e.preventDefault();
    // Alerts user with the information provided in the form
    alert(
      `${titleProps.value}, ${colorProps.value}`
    );
    // Resets the values of the fields
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default FormCustom;
