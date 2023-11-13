import { useState } from "react";
import "./App.css";

function App() {
  let [item, setItem] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let goods = item.map(function () {
    return 0;
  });

  let [good, setGood] = useState(goods);

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

      {item.map(function (item, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={controlTitle}>
              {item}
              <span
                onClick={() => {
                  let copyGood = [...good];
                  copyGood[i] += 1;
                  setGood(copyGood);
                }}
              >
                ❤️
              </span>
              {good[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

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
