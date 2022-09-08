// Read more about useReff hook link https://www.w3schools.com/react/react_useref.asp
// import the useReff hook
import { useRef } from "react";

function Form() {
    // Gets the values from the ref from form
  const txtTitle = useRef();
  const hexColor = useRef();
//   Form submit function handler
  const submit = (e) => {
    // Prevents default form behavior
    e.preventDefault();
    // Assign the values to variables
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    // Alert user about the values they had selected
    alert(`${title}, ${color}`);
    // Reset the values of the fields to empty
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };
  return (
    // Calls the submit function on submitting the form
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." />
      <input ref={hexColor} type="color" />
      <button>Add</button>
    </form>
  );
}

export default Form;
