import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNT_UP, COUNT_DOWN, COUNT_RESET } from '../../constants';

function CountContainer() {
  const count = useSelector((state) => state.count.count);

  const dispatch = useDispatch();
  const incrementCount = () => dispatch({ type: COUNT_UP });
  const decrementCount = () => dispatch({ type: COUNT_DOWN });
  const resetCount = () => dispatch({ type: COUNT_RESET, value: 0 });

  return (
    <div className="padder">
      <h3>
          The count from global state is&nbsp;
        <span className="highlight">{count}</span>
      </h3>
      <button className="button" type="button" onClick={incrementCount}>
          Count Up
      </button>
      <button className="button" type="button" onClick={decrementCount}>
          Count Down
      </button>
      <button className="button" type="button" onClick={resetCount}>
          Count Reset
      </button>
    </div>
  );
}

export default CountContainer;
