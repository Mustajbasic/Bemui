import ParseHelpers from './ParseHelper';

// @TODO Freeze the scope from outside changes. Only changes allowed should be through Component.updateScope(...)
export class Component {

  /**
   * Constructor for Component
   * @param {string} componentName Name for the component. Must be unique across the app
   * @param {string} template Html imported from a gile that is used to display the component
   * @param {object} props Data passed to the component
   */
  constructor(componentName, template, props = {}) {
    this.totalBoundElements = 0;
    this.componentName = componentName;

    this.scope = {};
    for(const key in props) {
      this.scope[key] = {
        value: props[key],
        boundElements: []
      }
    }
    this.template = template;
  }

  /**
   * Updates all bound DOM elements with new value
   * @param {Array<string>} boundElements Array of DOM element IDs which contain the data to be replaced
   * @param {string} value Data to be shown
   */
  updateBoundElements(boundElements, value) {
    boundElements.forEach(id => {
      document.getElementById(id).innerHTML = value;
    });
  }

  /**
   * Updates the internal scope of the component and updates template if needed
   * @param {object} newScope Updates or adds all fields in this.scope with the matching values from newScope
   */
  updateScope(newScope) {
    for(const key in newScope) {
      if(!this.scope.hasOwnProperty(key)) {
        this.scope[key] = {
          value: newScope[key],
          boundElements: []
        }
      } else {
        this.scope[key].value = newScope[key];
        this.updateBoundElements(this.scope[key].boundElements, newScope[key]);
      }
    }
  }

  /**
   * Parses the template
   */
  parse() {
    // @TODO Refactor parsing setup
    const tagNameRegex = /^[a-zA-Z_][a-zA-Z_$0-9]*$/;
    const allowedTagTypes = ['r', 'f', 'o', 'b', 'c'];
    const tags = html.match(regex) || [];
    const regex = /\{\{[a-z]:(.*?)\}\}/g;
    
    let html = this.template;
    
    tags.forEach(tag => {
      const {
        tagType, tagName
      } = ParseHelpers.parseTag(tag, allowedTagTypes);
      
      switch (tagType) {
        case 'o':
          html = ParseHelpers.paseO.call(this, tag, tagName, html, tagNameRegex);
          break;
        case 'b':
          html = ParseHelpers.parseB.call(this, tag, tagName, html, tagNameRegex);
          break;
        case 'f':
          html = ParseHelpers.parseF.call(this, tag, tagName, html, tagNameRegex);
          break;
        case 'c':
          html = ParseHelpers.parseC.call(this, tag, tagName, html, tagNameRegex);
          break;
        case 'r':
          html = ParseHelpers.parseR.call(this, tag, tagName, html, tagNameRegex);
          break;
        default:
          break;
      }
    });
    return html;
  }
}
