// import the useState hook
import { useState } from "react";

function FormState() {
    // Create variable to store the initial state of the form event
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    // Reset color and title value to default
    setTitle("");
    setColor("#000000");
  };
  return (
    <form onSubmit={submit}>
        {/* Assign value of title which then is stored in the state  */}
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
      />
      <button>Add</button>
    </form>
  );
}

export default FormState;
