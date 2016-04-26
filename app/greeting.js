import React from 'react';

const Greeting = (props) => (<div>{props.greeting} {props.name}</div>);

Greeting.propTypes = {
  greeting: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Greeting;
