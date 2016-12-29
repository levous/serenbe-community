import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import MemberList from '../components/membership/MemberList';
import * as TodoActions from '../actions/index';

class App extends Component {
  render() {
    const {todos, actions, members} = this.props;
    return (
      <div>
        <Header
          addTodo={actions.addTodo}
          />
        <MainSection
          todos={todos}
          actions={actions}
          />
        <MemberList
          members={members}
          />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  members: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    members: state.members
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
