import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Headline from './Headline';
import NameContainer from './components/NameContainer';
import { countUp, countDown, resetCount } from './actions';
import './App.css';
import TasksContainer from './components/TasksContainer';

export default function App() {
  
  // Retrieving global state
  const count = useSelector((state) => state.count.count);
  
  // Dispatcher methods
  const dispatch = useDispatch();
  const dispatchCountUp = () => dispatch(countUp);
  const dispatchCountDown = () => dispatch(countDown);
  const dispatchCountReset = () => dispatch(resetCount);
  
  return (
    <section className="container">
      <div className="padder">
        <Headline text="A random headline" />
      </div>

      <NameContainer />

      <div className="padder">
        <h3>
          The count from global state is&nbsp;
          <span className="highlight">{count}</span>
        </h3>
        <button type="button" onClick={dispatchCountUp}>
          Count Up
        </button>
        <button type="button" onClick={dispatchCountDown}>
          Count Down
        </button>
        <button type="button" onClick={dispatchCountReset}>
          Count Reset
        </button>
      </div>

     <TasksContainer/>

    </section>
  );
}
