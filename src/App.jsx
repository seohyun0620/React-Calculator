import { useState } from "react";
import "./App.css";
import styles from "./components/Button.module.css";

function App() {
  const [num, setNum] = useState(""); //입력 받은 숫자 상태
  const [oper, setOper] = useState(false); //연산자 상태(=빼고)

  function handleClickNum(e) {
    setNum((prev) => prev + e.target.value); //이전 state를 기반으로 state 업데이트
    setOper(true);
  }

  function handleClickOper(e) {
    if (oper) {
      setNum((prev) => prev + e.target.value);
    }
    setOper(false);
  }

  function handleClickResult() {
    try { //숫자 -> 연산자 -> = 순으로 눌렀을 때 발생하는 오류 해결 코드
      if (num !== "") { //첫입력에 =이 들어가는 것을 방지
        setNum(eval(num));
      }
    } catch (error) { //계산할 수 없는 수식들은 에러 처리
      console.log('계산할 수 없는 수식입니다 :',error);
      handleClickAc(); //에러가 발생하면 num초기화
    }
  }

  function handleClickDel() {
    if (typeof num === "number") {  //연산 완료하고 del 누르면 전부 다 사라지는 것 해결 (eval()써서 숫자형이니깐 String()을 사용해서 다시 문자열로 바꿔 slice()가능하게 함)
      setNum(String(num));
    }
    setNum((num) => num.slice(0, -1));
    setOper(true);
  }

  function handleClickAc() {
    setNum("");
    setOper(false);
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.container}>
        <div className={styles.display}>{num}</div>
        <button className={styles.itemAc} onClick={handleClickAc}>
          AC
        </button>
        <button className={styles.itemDel} onClick={handleClickDel}>
          DEL
        </button>
        <button className={styles.itemPer} value="%" onClick={handleClickOper}>
          %
        </button>
        <button className={styles.itemDiv} value="/" onClick={handleClickOper}>
          /
        </button>
        <button className={styles.item7} value="7" onClick={handleClickNum}>
          7
        </button>
        <button className={styles.item8} value="8" onClick={handleClickNum}>
          8
        </button>
        <button className={styles.item9} value="9" onClick={handleClickNum}>
          9
        </button>
        <button className={styles.itemMul} value="*" onClick={handleClickOper}>
          *
        </button>
        <button className={styles.item4} value="4" onClick={handleClickNum}>
          4
        </button>
        <button className={styles.item5} value="5" onClick={handleClickNum}>
          5
        </button>
        <button className={styles.item6} value="6" onClick={handleClickNum}>
          6
        </button>
        <button className={styles.itemMinus} value="-" onClick={handleClickOper}>
          -
        </button>
        <button className={styles.item1} value="1" onClick={handleClickNum}>
          1
        </button>
        <button className={styles.item2} value="2" onClick={handleClickNum}>
          2
        </button>
        <button className={styles.item3} value="3" onClick={handleClickNum}>
          3
        </button>
        <button className={styles.itemPlus} value="+" onClick={handleClickOper}>
          +
        </button>
        <button className={styles.item0} value="0" onClick={handleClickNum}>
          0
        </button>
        <button className={styles.itemPoint} value="." onClick={handleClickOper}>
          .
        </button>
        <button className={styles.itemEqual} value="=" onClick={handleClickResult}>
          =
        </button>
      </div>
    </>
  );
}

export default App;
