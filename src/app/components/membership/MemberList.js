import React, {PropTypes, Component} from 'react';
import Member from './Member';

export default class MemberList extends Component {
  render() {
    return (
      <div>
        {
          this.props.members.map((member) =>
              <Member member={member}/>
          )
        }
      </div>
    );
  }
}

MemberList.propTypes = {
  members: PropTypes.array
};
