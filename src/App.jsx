import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countUp, countDown, resetCount } from "./actions";
import uuid from "uuidv4";

export default function App() {
  // Component Level state
  const [userTask, setTask] = useState("");

  // Retrieving global state
  const count = useSelector(state => state.count.count);
  const name = useSelector(state => state.name.name);
  const tasks = useSelector(state => state.tasks);

  // Dispatcher methods
  const dispatch = useDispatch();
  const dispatchCountUp = () => dispatch(countUp);
  const dispatchCountDown = () => dispatch(countDown);
  const dispatchCountReset = () => dispatch(resetCount);
  const dispatchTaskAdd = () => {
    const value = {
      id: uuid(),
      text: userTask
    };

    if (value.text.length > 0) {
      dispatch({
        type: "TASK_ADD",
        value
      });
    }
  };
  const dispatchTaskDelete = id => dispatch({ type: "TASK_DELETE", value: id });

  return (
    <section>
      <p>Name from state is {name}</p>
      <p>{`The count is ${count}`}</p>
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
          onChange={e => setTask(e.target.value)}
        />
      </div>
      <button type="button" onClick={dispatchTaskAdd}>
        dispatch task
      </button>
      <ul>
        {tasks.map(task => (
          <li>
            <button type="button" onClick={() => dispatchTaskDelete(task.id)}>
              delete
            </button>{" "}
            {task.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
