import { useRef } from "react";

function NameForm() {
  const txtFirstName = useRef();
  const txtLastName = useRef();

  const submit = (e) => {
    e.preventDefault();
    const firstName = txtFirstName.current.value;
    const lastName = txtLastName.current.value;

    alert(`Hello ${firstName} ${lastName}`);
    txtFirstName.current.value = "";
    txtLastName.current.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input ref={txtFirstName} type="text" placeholder="Enter name" />
      <input ref={txtLastName} type="text" placeholder="Enter last name" />
      <button>Submit</button>
    </form>
  );
}

export default NameForm;
