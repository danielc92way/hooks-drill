import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (
  <div className="padder">
    <h1>{ text }</h1>
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
