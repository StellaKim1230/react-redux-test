import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUser as addUserAction } from '../redux/actions/user';
import * as userActions from '../redux/actions/user'

import Test from '../components/Test'

const mapStateToProps = state => ({
  users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch(addUserAction(user)),
  userActions: bindActionCreators(userActions, dispatch)
});

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Test);

export default TestContainer
