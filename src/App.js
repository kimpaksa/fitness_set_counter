import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Stack from './Stack/Stack'
import countdown from './res/sound/countdown2.mp3'
import sampleAudio from './res/sound/COW.mp3'


const VIEW_STATE_1 = 1;
const VIEW_STATE_2 = 2;
const VIEW_STATE_3 = 3;

function App() {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    console.log(navigator.vibrate);
    const [count, setCount] = useState(0);
    const [viewState, setViewState] = useState(VIEW_STATE_1);
    const [setValue, setSetValue] = useState(10);
    const [sectime, setSecTime] = useState(60);
    const [timerInt, setTimerInt] = useState(0);
    let intervalData = null;
    const sound = new Audio(sampleAudio);
    const countdownAudio = new Audio(countdown);
    // let stackTest = new Stack();
    // stackTest.push('0');
    // stackTest.pop();

    /*
      총 세트수 : 1 ~~~~~
      Rest Time : 1min 1sec  // REST TIME은 카운트를 올린 시점에 timer 동작. timer 시간이 끝나면 진동으로 알려줌.
      START
    */


    const changeSet = (e) => {
        setSetValue(e.target.value);
    }
    const changeSecTime = (e) => {
        setSecTime(e.target.value);
        setTimerInt(e.target.value)
    }
    const changeViewState = (data) => {
        setViewState(data);
    }
    const countUpToRest = () => {
        if (count >= setValue - 1) {
            alert("운동 완료");
            changeViewState(VIEW_STATE_1);
            setCount(0)
        } else {
            setCount(count + 1)
            let timer = parseInt(sectime);
            intervalData = setInterval(() => {
                --timer;
                if (timer >= 1 && timer <= 3) {
                    countdownAudio.play();
                }
                else if (timer <= 0) {
                    if (navigator.vibrate) {
                        // 배열로도 가능하다. 진동은 SOS 모스부호
                        navigator.vibrate([100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100]);
                    }
                    sound.play();
                    clearInterval(intervalData)
                }
            }, 1000)
        }
    }

    return (
        <div className="App">

            {viewState === VIEW_STATE_1 && (
                <div className="container">
                    <div className="sub">
                        <div className="title">총 세트수</div>
                        <div className="content">
                            <input type="text" className="input" value={setValue} onChange={changeSet} />
                        </div>
                    </div>
                    <div className="sub">
                        <div className="title">휴식(단위:초)</div>
                        <div className="content">
                            <input type="text" className="input" value={sectime} onChange={changeSecTime} />
                        </div>
                    </div>

                    <button className="sub-button" onClick={() => { changeViewState(VIEW_STATE_2) }}>
                        시작
                    </button>

                </div>
            )}


            {viewState === VIEW_STATE_2 && (
                <button onClick={() => { countUpToRest() }} style={{ width: '100vw', height: '100vh' }}>
                    <span style={{ fontSize: '17em' }}>{count}</span>
                    <span style={{ fontSize: '7em' }}>Set</span>
                </button>
            )}

        </div>
    );
}

export default App;


