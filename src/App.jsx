import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countUp, countDown, resetCount } from './actions';

export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{`The count is ${count}`}</p>
      <button type="button" onClick={() => dispatch(countUp)}>Count Up</button>
      <button type="button" onClick={() => dispatch(countDown)}>Count Down</button>
      <button type="button" onClick={() => dispatch(resetCount)}>Count Reset</button>
    </div>
  );
}
