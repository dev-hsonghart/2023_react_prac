import { useState } from "react";
import "./App.css";

function App() {
  let [item, setItem] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
    "블렌더 배우기",
  ]);
  let goods = item.map(function () {
    return 0;
  });

  let copy = [...item];

  let [good, setGood] = useState(goods);

  const set = () => {
    copy[0] = "여자 추천 코트";
    setItem(copy);
  };

  const sort = () => {
    copy.sort();

    setItem(copy);
  };

  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  // const controlTitle = (i) => {
  //   let bool = !modal;
  //   setModal(bool);

  //   setIndex(i);
  // };

  const [input, setInput] = useState("");
  const handlerInput = (e) => {
    // 입력값을 변수에 업데이트 하기
    let currentInput = e.target.value;
    setInput(currentInput);
  };

  const updateItem = (e) => {
    copy.push(input);
    setItem(copy);
    setInput("");
  };

  const deleteItem = (e) => {
    // 클릭한 아이템을 지우기
    // 클릭이 일어난 list에서 h4의 text값을 copy array에서 지우기

    const currentListIndex = e.target.parentNode.id;
    copy.splice(currentListIndex, 1);
    setItem(copy);
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
          <div className="list" key={i} id={i}>
            <h4
              onClick={() => {
                let bool = !modal;
                setModal(bool);
                setIndex(i);
              }}
            >
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
            <button
              onClick={() => {
                copy.splice(i, 1);
                setItem(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input type="text" onChange={handlerInput} value={input} />
      <button onClick={updateItem}>글 추가</button>

      {modal == true ? <Modal index={index} title={item} click={set} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.click}>글수정</button>
    </div>
  );
}

export default App;
