import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ title, content }) => (
  <div className="note">
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

Notes.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Notes;
