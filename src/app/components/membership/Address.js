import React, {PropTypes, Component} from 'react';

export default class Address extends Component {
  render() {
    const address = this.props.address;
    let streetFull;
    if (address.street2) {
      streetFull = `${address.street}, ${address.street2}`;
    } else {
      streetFull = address.street;
    }
    return (
      <div>
        <div>{streetFull}</div>
        <div>{`${address.city}, ${address.state} ${address.zip}`}</div>
      </div>
    );
  }
}

Address.propTypes = {
  address: PropTypes.object.isRequired
};
