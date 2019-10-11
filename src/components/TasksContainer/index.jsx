import React, { useState } from 'react';
import uuid from 'uuidv4';
import { useDispatch, useSelector } from 'react-redux';
import { TASK_ADD, TASK_DELETE } from '../../constants';

function TasksContainer() {
  const [userTask, setTask] = useState('');
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const dispatchTaskAdd = () => {
    const value = {
      id: uuid(),
      text: userTask,
    };

    if (value.text.length > 0) {
      dispatch({ type: TASK_ADD, value });
    }
  };

  const dispatchTaskDelete = (id) => {
    dispatch({ type: TASK_DELETE, value: id });
  };

  return (
    <div className="padder">
      <h3>
          Number of tasks in global state&nbsp;
        <span className="highlight">{tasks.length}</span>
      </h3>
      <input
        size="50"
        placeholder="Enter a new task..."
        type="text"
        name="task"
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <button className="button" type="button" onClick={dispatchTaskAdd}>
          dispatch task
      </button>
      <ul>
        {tasks.map((task) => (
          <li>
            <span className="highlight">{task.text}</span>
            <button className="button button--del" type="button" onClick={() => dispatchTaskDelete(task.id)}>
                delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksContainer;
