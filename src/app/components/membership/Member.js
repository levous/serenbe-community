import React, {PropTypes, Component} from 'react';
import Address from './Address';

export default class Member extends Component {
  render() {
    const member = this.props.member;
    return (
      <div key={`member${member.id}`}>
        <h2>{`${member.firstName} ${member.lastName}`}</h2>
        {member.propertyAddress ? <Address address={member.propertyAddress}/> : <div>missing property address</div>}
      </div>
    );
  }
}

Member.propTypes = {
  member: PropTypes.object.isRequired
};
