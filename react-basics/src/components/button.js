import React, { PropTypes } from 'react';

const Button = (props) => {
    console.log(props);
    return (
      <button onClick={props.click}>{props.name}</button>
    );
};
Button.propTypes = {
    name: PropTypes.string,
    click: PropTypes.func,
};
export default Button;
