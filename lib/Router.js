// @TODO Make Router work with nested routes
export class Router {
  constructor() {
    this.routes = {}
  }

  /**
   * Sets a Component to be parsed on a given route
   * @param {string} route Route to which the Component belongs
   * @param {Component} component Component which should be parsed on the route
   * @param {Array<Function>} guards Array of functions. If any of the functions does not return true, the component will not be parsed.
   * @returns {Router} The router object itself.
   */
  setRoute(route,component, guards=[]) {
    if (this.routes.hasOwnProperty(route)) {
      throw 'Route already exists';
    }
    this.routes[route] = {
      component,
      guards
    }
    return this;
  }

  /**
   * Sets a default route if a given route can not be matched
   * @param {string} route Route to which to redirect
   * @returns {Router} The router object itself.
   */
  set404(route) {
    this.route404 = route;
    return this;
  }

  /**
   * Parses the currently open route
   * @returns {Router} The router object itself.
   */
  async parseRoute() {
    const hash = location.hash;
    let route = this.routes[this.route404];
    if (this.routes['/' + hash.slice(1)]) {
      route = this.routes['/' + hash.slice(1)];
    }
    
    // @TODO Make guards wait for async functions
    for (const guard of route.guards) {
      const guardRes = await guard();
      if (!guardRes) {
        return;
      }
    }
    document.getElementById(this.locationId).innerHTML = route.component.parse();
  }

  /**
   * Loads a given route
   * @param {string} route Route which to load
   */
  loadRoute(route) {
    location.hash = route.slice(1);
  }

  /**
   * Sets the location where to parse the components 
   * @param {string} locationId Id of the DOM object where to parse components
   */
  mount(locationId) {
    this.locationId = locationId;
    window.addEventListener("hashchange", this.parseRoute.bind(this));
    this.parseRoute();
  }
}