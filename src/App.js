import React, { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const all = good + bad + neutral;

  const addGood = () => {
    setGood(good + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give your valuable feedback!</h1>
      <Button text="good" handleClick={addGood} />
      <Button text="neutral" handleClick={addNeutral} />
      <Button text="bad" handleClick={addBad} />

      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  );
};

export default App;
