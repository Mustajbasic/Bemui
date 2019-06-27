class AppEngineClass {

  /**
   * Constructor for AppEngineClass
   */
  constructor() {
    this.components = {};
    this.styles = '';
  }

  /**
   * Sets the title of the Page/Tab
   * @param {string} title Title of the document
   * @returns {AppEngineClass} The app engine object itself.
   */
  setPageTitle(title) {
    document.title = title;
    return this;
  }

  /**
   * Register the component
   * @param {Component} component Component object
   * @returns {AppEngineClass} The app engine object itself.
   */
  registerComponent(component) {
    if (this.components[component.componentName]) {
      throw 'Component name taken';
    }
    this.components[component.componentName] = component;
    return this;
  }

  /**
   * Register a CSS stylesheet
   * @param {string} style Imported stlesheet content
   * @returns {AppEngineClass} The app engine object itself.
   */
  registerStyle(style) {
    this.styles += style;
    return this;
  }

  /**
   * Applies all registered stylesheets via one style tag to the head of the document
   * @returns {AppEngineClass} The app engine object itself.
   */
  applyStyle() {
    const head = document.getElementsByTagName('head')[0];
    const styleTag = `<style type="text/css">${this.styles}</style>`
    head.innerHTML = head.innerHTML + styleTag;
    return this;
  }

  /**
   * Mounts a single component to a DOM object
   * @param {Component} component Component object
   * @param {string} rootElementID DOM element ID
   */
  mountComponent(component, rootElementID) {
    this.applyStyle();
    document.getElementById(rootElementID).innerHTML = component.parse();
  }
  
  /**
   * Mounts a component router to a DOM object
   * @param {Router} router Router object
   * @param {string} rootElementID DOM element ID
   */
  mountRouter(router, rootElementID) {
    this.applyStyle();
    this.router = router;
    this.router.mount(rootElementID);
  }

  /**
   * Loads the route via the loadRoute method from the internal router. Does nothing if router is not mounted
   * @param {string} route Path of the route you wish to load
   */
  loadRoute(route) {
    if (this.router) {
      this.router.loadRoute(route);
    }
  }
}

export const AppEngine = new AppEngineClass();
