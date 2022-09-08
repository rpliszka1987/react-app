import "./App.css";
// Import useState and useEffect from react library
import { useState, useEffect } from "react";

// This is array destructing. Which will assign a value to each of the array name in the [ ]
// const [firstCity, seconCity] = ["Tokyo", "Tahoe City", "Bend"];

// console.log(firstCity, seconCity);

// Creating component with a destructuring the props. Helps avoid using props all the time to call the object property
function App({ library }) {
  // Setting the state of the emotion with initial value of happy.
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("Tired");

  // Happens along side of render with the changes to the emothion array
  useEffect(() => {
    console.log(`It's ${emotion} right now!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      {/* Changes the state of the emotion */}
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Excited")}>Excited</button>
      <h2> Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("Energetic")}>Energetic</button>
    </div>
  );
}


// Export the component
export default App;
