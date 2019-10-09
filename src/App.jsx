import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuidv4';
import Headline from './Headline';
import { countUp, countDown, resetCount } from './actions';
import './App.css';

export default function App() {
  // Component Level state
  const [userTask, setTask] = useState('');
  const [userName, setUsername] = useState('');
  // Retrieving global state
  const count = useSelector((state) => state.count.count);
  const name = useSelector((state) => state.name.name);
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

  const dispatchUsername = () => {
    dispatch({ type: 'NAME_UPDATE', payload: { userName } });
  };
  return (
    <section>
      <div className="padder">
        <Headline text="Headline header text" />
      </div>

      <div className="padder">
        <h3>
          The name from global state is&nbsp;
          <span className="highlight">{name}</span>
        </h3>
        <input onChange={(e) => setUsername(e.target.value)} type="text" />
        <br />
        <button type="button" onClick={dispatchUsername}>Change name</button>
      </div>

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
        <textarea
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
