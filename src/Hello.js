import React from 'react';
import PropTypes from 'prop-types';

let test = 'unused var';
class Hello extends React.Component {
  componentDidMount() {
    console.log('Hello from the console, this should point to Hello.js line 7');
  }
  render() {
    console.log(hello.world);
    return <div>{this.props.hello}</div>;
  }
}
Hello.propTypes = {
  hello: PropTypes.string
};
export default Hello;
