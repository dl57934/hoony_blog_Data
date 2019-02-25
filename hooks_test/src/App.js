import React, { useState, useEffect } from "react";

const useInputTag = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange };
};

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input {...useInputTag} type="password" />
      <input {...useInputTag} type="email" />
      <input {...useInputTag} type="name" />
    </div>
  );
};

export default App;
