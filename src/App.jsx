import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countUp, countDown, resetCount } from './actions';
import uuid from 'uuidv4';


export default function App() {
  const [userTask, setTask] = useState('');
  const count = useSelector((state) => state.count.count);
  const name = useSelector((state) => state.name.name);
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const dispatchCountUp = () => dispatch(countUp);
  const dispatchCountDown = () => dispatch(countDown);
  const dispatchCountReset = () => dispatch(resetCount);
  const dispatchTaskAdd = () => {
    
    const value = {
      id: uuid(),
      text: userTask,
    }

    dispatch({
      type: 'TASK_ADD',
      value,
    })
  };
  const dispatchTaskDelete = (id) => dispatch({ type: 'TASK_DELETE', value: id});

  return (
    <section>
      <p>{`The name is ${name}`}</p>
      <p>{`The count is ${count}`}</p>
      <button type="button" onClick={dispatchCountUp}>Count Up</button>
      <button type="button" onClick={dispatchCountDown}>Count Down</button>
      <button type="button" onClick={dispatchCountReset}>Count Reset</button>
      <div>
        <textarea type="text" name="task" onChange={(e) => setTask(e.target.value)} />
      </div>
      <button
        type="button"
        onClick={dispatchTaskAdd}
      >
      dispatch task

      </button>
      <ul>
        {
          tasks.map((task) => <li><button type="button" onClick={()=>dispatchTaskDelete(task.id)}>delete</button> { task.text }</li>)
        }
      </ul>
    </section>
  );
}
