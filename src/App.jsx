import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuidv4';
import { countUp, countDown, resetCount } from './actions';
import './App.css';

export default function App() {
  // Component Level state
  const [userTask, setTask] = useState('');
  const [userName, setUsername] = useState('daniel c!');
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
      <h1>
        The name from global state is&nbsp;
        <span className="highlight">{name}</span>
      </h1>
      <input onChange={(e) => setUsername(e.target.value)} type="text" />
      <button type="button" onClick={dispatchUsername}>Change name</button>
      <h1>
        The count from global state is&nbsp;
        <span className="highlight">{count}</span>
      </h1>
      <button type="button" onClick={dispatchCountUp}>
        Count Up
      </button>
      <button type="button" onClick={dispatchCountDown}>
        Count Down
      </button>
      <button type="button" onClick={dispatchCountReset}>
        Count Reset
      </button>
      <div>
        <textarea
          type="text"
          name="task"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type="button" onClick={dispatchTaskAdd}>
        dispatch task
      </button>
      <ul>
        {tasks.map((task) => (
          <li>
            <button type="button" onClick={() => dispatchTaskDelete(task.id)}>
              delete
            </button>
            {' '}
            {task.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
