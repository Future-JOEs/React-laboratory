import React from 'react';
import './App.css';
import useCountDown from './hooks/useCountDown';
import useCountdown6 from './hooks/useCountDown/index2';

function App() {
  const handleJsMove = () => {
    let e = document.getElementById('js_move');
    animate(e, 100);
  };

  const animate = (ele: any, spd: any) => {
    var start = Date.now(); // remember start time
    var timer = setInterval(function() {
      var timePassed = Date.now() - start;
      var step = Math.ceil(Math.abs(timePassed - 5000) / 10);
      console.log(step);
      if (timePassed >= 5000) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
      }
      ele.style.left = ele.offsetLeft + step + 'px';
    }, spd);
  };

  const log2 = () => {
    console.log('2222 +1s');
  };
  const log1 = () => {
    console.log('111111 +1s');
  };
  const { count, reset, recovery, pause } = useCountdown6(10000, 1000, log1);

  return (
    <div>
      <div className="container">
        <div className="box1">
          <div className="sector"></div>
        </div>
        <div className="box2">
          <div className="box"></div>
        </div>
        <div className="box3"></div>
      </div>
      <div className="container1">
        <div className="left">1</div>
        <div className="right">3</div>
        <div className="content">2</div>
      </div>
      {/* <div className="container2">
        <div className="css_move"></div>
        <div id="js_move" onClick={handleJsMove} className="js_move"></div>
      </div> */}
      <div className="container3">
        <div>计时器2</div>
        <div>倒计时：{count}</div>
        <button>启动</button>
        <button onClick={pause}>暂停</button>
        <button onClick={recovery}>恢复</button>
        <button onClick={reset}>重启</button>
      </div>
    </div>
  );
}

export default App;
