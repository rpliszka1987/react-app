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

  // Happens along side of render with the changes to the emothion array
  useEffect(() => {
    console.log(`It's ${emotion} right now!`)
  }, [emotion])
 
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      {/* Changes the state of the emotion */}
      <button onClick={() => setEmotion('Sad')}>Sad</button>
      <button onClick={() => setEmotion('Excited')}>Excited</button>
    </div>
  );
}

// Export the component
export default App;
