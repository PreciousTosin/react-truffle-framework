import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import signUpUser from './SignUpFormActions';

const mapStateToProps = (state, ownProps) => ({}); /* eslint no-unused-vars: 'off' */

const mapDispatchToProps = dispatch => ({
  onSignUpFormSubmit: (name) => {
    dispatch(signUpUser(name));
  },
});

const SignUpFormContainer = connect(mapStateToProps,
  mapDispatchToProps)(SignUpForm);

export default SignUpFormContainer;
