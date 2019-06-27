import { Component, AppEngine } from '../../../bemui/Bemui';
import {default as HomeTemplate} from './Home.html';
import {default as HomeStyle} from './Home.css';

import Menu from '../Menu/Menu';

const scope = {
  pageName: 'BemUI Demo Page',
  menu: Menu,
  testing: 'Hello there',
  admin: true,
  user: true,
  jackass: true,
}


const Home = new Component('Home', HomeTemplate, scope);

setTimeout(()=>{
  Home.updateScope({
    testing: 'Goodbye now'
  });
}, 3000)

AppEngine.registerStyle(HomeStyle).registerComponent(Home);
export default Home;