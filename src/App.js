import { useState } from "react";
import "./App.css";

function App() {
  let [item, setItem] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [good, setGood] = useState(0);

  const set = () => {
    let copy = [...item];
    copy[0] = "여자 추천 코트";
    setItem(copy);
  };

  const sort = () => {
    let copy = [...item];
    copy.sort();

    setItem(copy);
  };

  let [modal, setModal] = useState(false);
  const controlTitle = () => {
    let bool = !modal;
    setModal(bool);
  };

  return (
    <div className="App">
      <div className="nav-bar">
        <h4>블로그 제목</h4>
      </div>
      <button onClick={sort}>가나다순정렬</button>
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
        <h4 onClick={controlTitle}>{item[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
