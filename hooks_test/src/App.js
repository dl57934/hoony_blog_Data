import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  const [name, setName] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name]);
  const onChangeName = e => {
    const {
      target: { value }
    } = e;
    setName(value);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input value={name} type="email" onChange={onChangeName} />
    </div>
  );
};

export default App;
