import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const time = () => {
    console.log(count); // 클릭직후 실행
    setTimeout(function () {
      console.log("hi", count); // 클릭만큼 실행
      setCount(count + 1); // 여러번눌러도 한번만 실행
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={time}>click!</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default App;
