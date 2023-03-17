import React from 'react';
import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <p>Page navigation</p>
      {children}
    </div>
  );
}

Page.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
};
