import { Component, AppEngine } from '../../../bemui/Bemui';
import {default as FourOhFourTemplate} from './404.html';

import Menu from '../Menu/Menu';

const scope = {
  menu: Menu
}

const FourOFour = new Component('FourOFour', FourOhFourTemplate, scope);

AppEngine.registerComponent(FourOFour);
export default FourOFour;