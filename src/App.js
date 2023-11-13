import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [item, b] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);

  return (
    <div className="App">
      <div className="nav-bar">
        <h4>블로그 제목</h4>
      </div>
      <div className="list">
        <h4>{item[0]}</h4>
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
