import React, {PropTypes, Component} from 'react';
import Address from './Address';

export default class Member extends Component {
  render() {
    const member = this.props.member;
    return (
      <div>
        <h2>{member.firstName} {member.lastName}</h2>
        {member.propertyAddress && <Address address={member.propertyAddress}/>}
      </div>
    );
  }
}

Member.propTypes = {
  member: PropTypes.object.isRequired
};
