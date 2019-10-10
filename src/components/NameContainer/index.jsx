import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function NameContainer() {
  const [userName, setUsername] = useState('');
  const name = useSelector((state) => state.name.name);
  const dispatch = useDispatch();
  const dispatchUsername = () => {
    dispatch({ type: 'NAME_UPDATE', payload: { userName } });
  };

  return (
    <div className="padder">
      <h3>
          The name from global state is&nbsp;
        <span className="highlight">{name}</span>
      </h3>
      <input
        placeholder="Enter a name..."
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <br />
      <button
        className="button"
        type="button"
        onClick={dispatchUsername}
      >
        Dispatch Name

      </button>
    </div>
  );
}
