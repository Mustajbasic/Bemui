import { AppEngine, Router } from '../lib/Bemui';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import FourOFour from './components/404/404';
import {default as SharedStyle} from './main.css';

const MainRouter = new Router();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


MainRouter
  .setRoute('/', Home)
  .setRoute('/login', Login,[async function () {
    await sleep(2000);
    console.log('Done waiting');
    return true;
    
  }])
  .setRoute('/404', FourOFour)
  .set404('/404');
  
AppEngine
  .setPageTitle('BemUI App')
  .registerStyle(SharedStyle)
  .mountRouter(MainRouter,'rootElementID'); 

export default AppEngine.components;