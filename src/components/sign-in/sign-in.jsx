import React from 'react';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/user/user';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._emailField = React.createRef();
    this._passwordField = React.createRef();

    this._handlerSignInButtonClick = this._handlerSignInButtonClick.bind(this);
  }

  render() {
    const {_handlerSignInButtonClick, _emailField, _passwordField} = this;

    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={_emailField} defaultValue="test@test.com" className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={_passwordField} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={_handlerSignInButtonClick}>Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>;
  }

  _handlerSignInButtonClick(evt) {
    evt.preventDefault();

    const {_emailField, _passwordField} = this;

    if (_emailField && _passwordField) {
      const [email, password] = [_emailField.current.value, _passwordField.current.value];

      if (email && password) {
        this.props.signIn({email, password});
      }
    }
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps);
const mapDispatchToProps = (dispatch) => ({
  signIn: (data) => {
    dispatch(Operation.signIn(data));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
