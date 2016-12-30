import React, {PropTypes, Component} from 'react';
import Member from './Member';

export default class MemberList extends Component {
  render() {
    return (
      <div>
        {
          this.props.members.map((member, i) =>
            <Member key={`mem${i}`} member={member}/>
          )
        }
      </div>
    );
  }
}

MemberList.propTypes = {
  members: PropTypes.array
};
