import { useState } from "react";

export const Button = ({ clickAction, clickValue }) => {
  return <button onClick={() => clickAction(clickValue)}>+{clickValue}</button>;
};

export const Display = ({ content }) => <pre>{content}</pre>;

// export const CountManager = () => {
//   const [count, setCount] = useState(0);

//   const incrementCounter = (incrementValue) => {
//     setCount(count + incrementValue);
//   };

//   return (
//     <>
//       <Button clickAction={incrementCounter} clickValue={1} />
//       <Button clickAction={incrementCounter} clickValue={5} />
//       <Button clickAction={incrementCounter} clickValue={10} />
//       <Display content={count} />
//     </>
//   );
// };

export const CharacterCounter = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const element = event.target;
    setInputValue(element.value);
  };

  return (
    <div>
      <textarea
        cols={80}
        rows={10}
        value={inputValue}
        onChange={handleChange}
      />
      <div>Count: {inputValue.length}</div>
    </div>
  );
};
