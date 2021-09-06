import Loader from 'react-loader-spinner';
import React from 'react';
const Spinner = () => {
  return (
    <Loader
      style={{ backgroundColor: 'transparent', padding: '1%' }}
      type="Oval"
      color="#00BFFF"
      height={10}
      width={40}
    />
  );
};

export default Spinner;
