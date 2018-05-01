import React from 'react';
import PropTypes from 'prop-types';

let test = 'unused var';
class Hello extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}
Hello.propTypes = {
  hello: PropTypes.string
};
export default Hello;
