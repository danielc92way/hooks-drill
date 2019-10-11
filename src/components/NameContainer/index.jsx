import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NAME_UPDATE } from '../../constants';

function NameContainer() {
  // Component state stores user input
  const [userName, setUsername] = useState('');

  // Access global state for name
  const name = useSelector((state) => state.name.name);

  // Dispatch method to change name
  const dispatch = useDispatch();
  const dispatchUsername = () => {
    dispatch({ type: NAME_UPDATE, payload: { userName } });
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

export default NameContainer;
