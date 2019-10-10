import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuidv4';

export default function TasksContainer() {

    const [userTask, setTask] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

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
    )
}
