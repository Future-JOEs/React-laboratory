import React from "react";
import "./App.css";

function App() {
  const handleJsMove = () => {
    let e = document.getElementById("js_move");
    animate(e, 100);
  };

  const animate = (ele: any, spd: any) => {
    var start = Date.now(); // remember start time
    var timer = setInterval(function () {
      var timePassed = Date.now() - start;
      var step = Math.ceil(Math.abs(timePassed - 5000) / 10);
      console.log(step);
      if (timePassed >= 5000) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
      }
      ele.style.left = ele.offsetLeft + step + "px";
    }, spd);
  };

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
      <div className="container2">
        <div className="css_move"></div>
        <div id="js_move" onClick={handleJsMove} className="js_move"></div>
      </div>
    </div>
  );
}

export default App;
