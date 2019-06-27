import { Component, AppEngine } from '../../../lib/Bemui';

import {default as MenuTemplate} from './Menu.html';
import {default as MenuStyle} from './Menu.css';

class MenuComponent extends Component {
  loadHome() {
    AppEngine.loadRoute('/');
  }

  loadLogin() {
    console.log('Go to login 1');
    
    AppEngine.loadRoute('/login');
  }
}

const Menu = new MenuComponent('Menu', MenuTemplate);

AppEngine.registerStyle(MenuStyle).registerComponent(Menu);

export default Menu;