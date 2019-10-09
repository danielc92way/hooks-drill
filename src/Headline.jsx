import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ text }) => <h1>{text}</h1>;

Headline.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Headline;
