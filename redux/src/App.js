import React from 'react';
import ChildComponent from './ChildComponent';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';

function App() {
  const dispatch = useDispatch();
  const { changeText } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <ChildComponent />
      <ChildComponent />
      <button onClick={() => changeText("App changed it")}>Change text</button>
    </div>
  )
}

export default App;
