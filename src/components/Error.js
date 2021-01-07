import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return (
        <div>
            <div className="red darken-4 error">
              <p>{mensaje}</p>
            </div>
          
        </div>
    );
};
Error.propTypes={
    mensaje:PropTypes.string.isRequired
  
  }
export default Error;