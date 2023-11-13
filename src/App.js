import { useState } from "react";
import "./App.css";

function App() {
  let [item, setItem] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [good, setGood] = useState(0);
  const title = "여자 추천 코트";

  const set = () => {
    let copy = [...item];
    copy[0] = "여자 추천 코트";
    setItem(copy);
  };

  return (
    <div className="App">
      <div className="nav-bar">
        <h4>블로그 제목</h4>
      </div>
      <button type="button" onClick={set}>
        제목 변경
      </button>
      <div className="list">
        <h4>
          {item[0]}
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            ❤️
          </span>
          {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{item[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{item[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
