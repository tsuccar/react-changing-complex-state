import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const newName = event.target.value;
    const inputNameAttr = event.target.name;

    // or above two lines can be re-written with 'object Destructuring'
    // const [value, name] = event.target;
    // inside the curly bracket {} object literals, you have name, value properties.

    console.log(newName);
    setName((prevName) => {
      console.log(prevName);
      if (inputNameAttr === "fName") {
        return { fName: newName, lName: prevName.lName };
      } else {
        return { fName: prevName.fName, lName: newName };
      }
    });
  }

  // CAUTION don't access event.target.name or any event INSIDE setName() function !!
  // it will trigger "Synthetic event error" that you can read up on React website for mere.
  // Basicall all the events that you get from INput and passed around to useState are not readl event but synthteic.
  // Don't use them in the stateful Setters !!

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}{" "}
      </h1>
      <form>
        <input
          value={name.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={name.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
