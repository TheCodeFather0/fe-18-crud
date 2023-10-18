import React, { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(30);
  setInterval(() => {
    setCount(count - 1);
  }, 1000);
  return (
    <div>
      <h1 align="center">{count}</h1>
    </div>
  );
};

export default Timer;
