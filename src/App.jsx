import { useState } from 'react'
import './App.css'
import styles from './components/Button.module.css';

//  ac버튼 구현 00

//  del버튼 구현 00

//  소숫점,연산자 2번 못쓰게 예외 처리 00

//  첫입력에 연산자,소숫점,= 못쓰게 예외처리 00

//  소숫점,연산자 연달아 못쓰게 처리 00

//  del누르고 연산자 누르면 안눌림 : 6+에서 +지우고 6상태에서 - 누르면 안눌림 00
//---------------------------------------------------------------------------------
//  연산 완료하고 del 누르면 전부 다 사라짐

//  숫자누르고 연산자 누르고 = 누르면 오류 ->result 상태값도 추가?


//  무한대는 오류나도록 예외처리

function App() {

  const [num, setNum] = useState(""); //입력 받은 숫자 상태
  const [oper,setOper]=useState(false); //연산자 상태(=빼고)

  function handleClickNum(e) {
    setNum((prev) => prev + e.target.value); //이전 state를 기반으로 state 업데이트
    setOper(true);
    console.log(num);
    console.log(typeof(e.target.value));
  }

  function handleClickOper(e) {
    if(oper){
      setNum((prev) => prev + e.target.value);
      console.log(typeof(e.target.value));
    }
    setOper(false);
  }

  function handleClickResult(){
    if(num !== ""){ //첫입력에 =이 들어가는 것을 방지
      console.log(num);
      console.log(typeof(num));
  
      setNum(eval(num));
      console.log(num);
      // const str=num;
      // const arr=str.split(/(\+|\*|\/|-|%)/); /* 문자열을 구분자 기준으로 잘라서 배열로 반환 */
      // console.log(arr);
      
      // const result =new Function();
      // console.log(result);
    }
    }

    function handleClickDel(){
      setNum(num => num.slice(0, -1));
      setOper(true); // <<어제 추가한거니까 확인해보기
    }

    function handleClickAc(){
      setNum("");
      setOper(false);
    }

  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.container}>
        <div className={styles.display}>{num}</div>
        <button className={styles.itemAc} onClick={handleClickAc}>AC</button>
        <button className={styles.itemDel} onClick={handleClickDel}>DEL</button>
        <button className={styles.itemPer} value="%" onClick={handleClickOper}> % </button>
        <button className={styles.itemDiv} value="/" onClick={handleClickOper}>/</button>
        <button className={styles.item7} value="7" onClick={handleClickNum}>7</button>
        <button className={styles.item8} value="8" onClick={handleClickNum}>8</button>
        <button className={styles.item9} value="9" onClick={handleClickNum}>9</button>
        <button className={styles.itemMul} value="*" onClick={handleClickOper}>*</button>
        <button className={styles.item4} value="4" onClick={handleClickNum}>4</button>
        <button className={styles.item5} value="5" onClick={handleClickNum}>5</button>
        <button className={styles.item6} value="6" onClick={handleClickNum}>6</button>
        <button className={styles.itemMinus} value="-" onClick={handleClickOper}>-</button>
        <button className={styles.item1} value="1" onClick={handleClickNum}>1</button>
        <button className={styles.item2} value="2" onClick={handleClickNum}>2</button>
        <button className={styles.item3} value="3" onClick={handleClickNum}>3</button>
        <button className={styles.itemPlus} value="+" onClick={handleClickOper}>+</button>
        <button className={styles.item0} value="0" onClick={handleClickNum}>0</button>
        <button className={styles.itemPoint} value="." onClick={handleClickOper}>.</button> 
        <button className={styles.itemEqual} value="=" onClick={handleClickResult}>=</button>
      </div>
    </>
  )
}

export default App
