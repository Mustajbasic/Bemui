import { Component, AppEngine } from '../../../bemui/Bemui';

import {default as LoginTemplate} from './Login.html';
import {default as LoginStyle} from './Login.css';

import Menu from '../Menu/Menu';

const scope = {
  username: '',
  password: '',
  menu: Menu
}

class LoginComponent extends Component {
  login() {
    alert(`Username: ${this.scope.username.value} Password: ${this.scope.password.value}`);
  }

  handleOnUsernameInput() {
    this.updateScope({
      username: document.getElementById('login-username').value
    })
  }

  handleOnPasswordInput() {
    this.updateScope({
      password: document.getElementById('login-password').value
    })
  }
}
const Login = new LoginComponent('Login', LoginTemplate, scope);

AppEngine.registerStyle(LoginStyle).registerComponent(Login);
export default Login;