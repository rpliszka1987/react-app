// useReducer documentation https://www.w3schools.com/REACT/react_usereducer.asp
// Import useReducer
import { useReducer } from "react";

function AppTwo() {
    // Usinf setReducer
  const [checked, setChecked] = useReducer(checked => !checked, false);
  return (
    <div className="AppTwo">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>
        {checked ? "Checked" : "Not Checked"}
      </label>
    </div>
  );
}

export default AppTwo;
