import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuidv4';
import Headline from './Headline';
import NameContainer from './components/NameContainer';
import { countUp, countDown, resetCount } from './actions';
import './App.css';

export default function App() {
  // Component Level state
  const [userTask, setTask] = useState('');
  
  // Retrieving global state
  const count = useSelector((state) => state.count.count);
  
  const tasks = useSelector((state) => state.tasks);

  // Dispatcher methods
  const dispatch = useDispatch();
  const dispatchCountUp = () => dispatch(countUp);
  const dispatchCountDown = () => dispatch(countDown);
  const dispatchCountReset = () => dispatch(resetCount);
  const dispatchTaskAdd = () => {
    const value = {
      id: uuid(),
      text: userTask,
    };

    if (value.text.length > 0) {
      dispatch({
        type: 'TASK_ADD',
        value,
      });
    }
  };
  const dispatchTaskDelete = (id) => dispatch({ type: 'TASK_DELETE', value: id });

  
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

      <div className="padder">
        <h3>
          Number of tasks in global state&nbsp;
          <span className="highlight">{tasks.length}</span>
        </h3>
        <input
          size="50"
          type="text"
          name="task"
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <button type="button" onClick={dispatchTaskAdd}>
          dispatch task
        </button>
        <ul>
          {tasks.map((task) => (
            <li>
              <span className="highlight">{task.text}</span>
              <button type="button" onClick={() => dispatchTaskDelete(task.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
