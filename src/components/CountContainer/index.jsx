import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countUp, countDown, resetCount } from '../../actions';

export default function CountContainer() {
  const count = useSelector((state) => state.count.count);

  const dispatch = useDispatch();
  const dispatchCountUp = () => dispatch(countUp);
  const dispatchCountDown = () => dispatch(countDown);
  const dispatchCountReset = () => dispatch(resetCount);

  return (
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
  );
}
