import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



function App() {



  let [t, setT] = React.useState(new Date());


   t.setTime(t.getTime() + 1000);


   window.addEventListener('load', function () {

    if(localStorage.getItem('time') !== 'null' )  {
      let in_time =localStorage.getItem('time');
      t.setHours(+in_time.substr(0, 2))
      t.setMinutes(+in_time.substr(3, 2));
      t.setSeconds(+in_time.substr(6, 2));
      document.querySelector('input[type="time"]').value=in_time
    }
    
      
  });
    
  



  return (

    <div className="content">
      <div className="header1">
        <div className="header__title">
          City time
        </div>

        <div className="section">
          <div className="time">
            <div className="box">
              <div className="box__time1">
                 <span className="time_">{t.getUTCHours()}:{t.getMinutes()}:{t.getSeconds()}</span>
              </div>
              <div className="box__title">London</div>
            </div>
            <div className="box">
              <div className="box__time2"></div>
              <span className="time_">{t.toLocaleTimeString()}</span>
              <div className="box__title">Kiev</div>
            </div>
            <div className="box">
              <div className="box__time3"></div>
              <span className="time_">{t.getHours()-1}:{t.getMinutes()}:{t.getSeconds()}</span>
              <div className="box__title">Rome</div>
            </div>
          </div>
          <div className="deb">
            <div className="deb_title">Select time</div>
            <input
              id="deb_time"
              type="time"
              name="in_time"
              step="1"
              onInput={() =>
                In_time()
              }
              
            />
            <button 
            className="deb_btn" 
            onClick={() => 
            
              Btn_click()
            }>Current time</button>
          </div>

        </div>
      </div>
    </div>

  );

  function Btn_click(){
    document.querySelector('input[type="time"]').value=null
    localStorage.setItem('time', null);
    return(
      setT(new Date())
    )
  }

  

  function In_time() {
    let input_time = document.querySelector('input[type="time"]').value;
    let input_hours = +input_time.substr(0, 2);
    let input_minutes = +input_time.substr(3, 2);
    let input_seconds = +input_time.substr(6, 2);
    if (input_hours === 0 && input_minutes === 0) {
      localStorage.setItem('time', null);
      return (
        setT(new Date())
      )
    }

    localStorage.setItem('time', input_time);
    return (

      setT(new Date(t.getFullYear(), t.getMonth(), t.getDate(), input_hours, input_minutes, input_seconds))
    )
  }
};


export default App;




function tick() {

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
