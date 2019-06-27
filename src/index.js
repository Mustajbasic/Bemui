import { AppEngine, Router } from '../bemui/Bemui';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import FourOFour from './components/404/404';
import {default as SharedStyle} from './main.css';

const MainRouter = new Router();

MainRouter
  .setRoute('/', Home)
  .setRoute('/login', Login,[])
  .setRoute('/404', FourOFour)
  .set404('/404');
  
AppEngine
  .setPageTitle('BemUI App')
  .registerStyle(SharedStyle)
  .mountRouter(MainRouter,'rootElementID'); 

export default AppEngine.components;