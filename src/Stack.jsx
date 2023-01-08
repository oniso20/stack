import React, { useState } from "react";

function Stack() {
  // Declare a state variable for the stack
  const [stack, setStack] = useState([]);

  // Declare a state variable for the input field
  const [input, setInput] = useState("");

  // Declare a function to push an item to the stack
  const push = (item) => {
    setStack([...stack, item]);
    setInput("");
  };

  // Declare a function to pop an item from the stack
  const pop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1));
    }
  };

  return (
    <div className="stack">
      <div className="contents">
        <div className="header">
          <h1>Enter the Stack</h1>
        </div>
        <div className="instructions">
          <p>
            Enter an item in the input field and click the "Push" button to add
            it to the stack.
          </p>
          <p>Click the "Pop" button to remove the top item from the stack.</p>
          <p>
            A stack is a linear data structure that is open at only one end and
            the operations are performed in Last In First Out (LIFO) order.
          </p>
        </div>
        {/* Input field to add an item to the stack */}
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => push(input)}>Push</button>
        {/* Display the stack */}
        <h3>Stack:</h3>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* Button to pop an item */}
        <button onClick={() => pop()}>Pop</button>
      </div>
    </div>
  );
}

export default Stack;
