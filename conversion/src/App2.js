import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function App() {

  const [text, setText] = useState("Default text");
  const [counter, setCounter] = useState(0);

  const timerTrigger = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  useEffect(() => {
    console.log('CDM');
    setText((new Date()).getMilliseconds().toString());
    const timer = window.setInterval(() => {
      timerTrigger();
    }, 1000)
    return () => {
      console.log('CWU');
      window.clearInterval(timer);
    }
  }, [])

  return (
    <div>
      <div>
        {text}
      </div>
      <div>
        {counter}
      </div>
      <div>
        <Link to="/page2">Go to Page2</Link>
      </div>
    </div>
  )

}