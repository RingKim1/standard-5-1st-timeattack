import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState(0);

  const addHandler = (event) => {
    console.log("작동 여부");
    setResult([...(result + number)]);
  };
  const subtractHandler = (event) => {
    console.log("작동 여부");
    setResult([...(result - number)]);
  };
  const initializeHandler = () => {
    setResult(0);
  };
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          placeholder=""
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />{" "}
        만큼을 <button onClick={addHandler}>더할게요</button>{" "}
        <button onClick={subtractHandler}>뺄게요</button>
        <button onClick={initializeHandler}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
