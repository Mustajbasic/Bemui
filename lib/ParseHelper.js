const ParseHelpers = {
  /**
   * Extracts only unique elements from an array into a new array
   * @param {Array<any>} arr Array from which to remove the dupliccates
   * @returns {Array<any} Array with only unique elements from input array
   */
  withoutDuplicates(arr) {
    const newArray = [];
    arr.forEach(element => {
      if(newArray.includes(element)) {
        return;
      }
      newArray.push(element);
    });
    return newArray;
  },

  /**
   * Finds all occurrances of the given tag in the html string. 
   * @param {string} html The html object
   * @param {string} tag The tag that we are searching for
   * @returns {Array<number>} Array of all occurrances of tag in html. Elements are indexes of the first character in tag
   */
  searchAll(html, tag) {
    const indexes = [];
    let startFrom = 0;
    while (true) {
      startFrom = html.indexOf(tag, startFrom);
      if(startFrom === -1) {
        return indexes;
      }
      indexes.push(startFrom);
      startFrom++;
    }
  },

  /**
   * Replaces all the occurances of a given tag in an html object with a corresponding elements
   * @param {string} html The html object
   * @param {string} tag Tag to be replaced
   * @param {Array<string>} elements Array of elements to be inserted instead of tags
   * @param {Array<number>} positions Array of indexes of found tags
   * @returns {string} THe html object with all the tags replaced with the corresponding elements
   */
  replaceAll(html, tag, elements, positions) {
    let final = '';
    positions = positions.reverse();
    positions.forEach(pos => {
      final = html.slice(pos) + final;
      html = html.slice(0, pos);
      const newTag = elements.shift()
      
      final = final.replace(tag, newTag);
    });
    final = html + final;
    return final;
  },

  /**
   * Parses a given BemUI tag into the tagType and tagName
   * @param {string} tag BemUI tag to be barsed
   * @param {Array<string>} allowedTagTypes Alloed types of a tag(o,b,c,f...)
   * @returns {string, string} Object containing tagType and tagName
   */
  parseTag(tag, allowedTagTypes) {
    const rawTag = tag.substring(2, tag.length-2).trim();
    const tagType = rawTag[0];
    const colon = rawTag[1];
    const tagName = rawTag.slice(2).trim();

    if(!allowedTagTypes.includes(tagType) || colon !== ':') {
      throw 'Error';
    }
    return {
      tagType, tagName
    }
  },

  /**
   * Parses BemUI tags of type O (one-time bind)
   * @param {string} tag Original tag
   * @param {string} tagName Tag name (must match the name from the scope of the Component)
   * @param {string} html The html objest in which the tag is located
   * @param {regex} regex Regex for validating the tag name
   */
  paseO(tag, tagName, html, regex) {
    if(!regex.test(tagName)) {
      throw 'Error';
    }
    return html.replace(tag, this.scope[tagName].value);
  },

  /**
   * Parses BemUI tags of type B (dynamic bind)
   * @param {string} tag Original tag
   * @param {string} tagName Tag name (must match the name from the scope of the Component)
   * @param {string} html The html objest in which the tag is located
   * @param {regex} regex Regex for validating the tag name
   */
  parseB(tag, tagName, html, regex) {
    if(!regex.test(tagName)) {
      throw 'Error';
    }
    const positions = ParseHelpers.searchAll(html,tag);
    
    const elements = [];
    positions.forEach(() => {
      this.totalBoundElements++;
      const uniqueID = this.componentName + '-' + this.totalBoundElements;
      this.scope[tagName].boundElements.push(uniqueID);
      elements.push(`<span id="${uniqueID}">${this.scope[tagName].value}</span>`);
    });
    
    return ParseHelpers.replaceAll(html,tag,elements,positions);
  },

  /**
   * Parses BemUI tags of type F (function)
   * @param {string} tag Original tag
   * @param {string} tagName Tag name (must match the name from the scope of the Component)
   * @param {string} html The html objest in which the tag is located
   * @param {regex} regex Regex for validating the tag name
   */
  parseF(tag, tagName, html, regex) {
    if(!regex.test(tagName)) {
      throw 'Error';
    }
    
    return html.replace(tag, `"bemui.default.${this.componentName}.${tagName}()"`);
  },

  /**
   * Parses BemUI tags of type C (comoponent)
   * @param {string} tag Original tag
   * @param {string} tagName Tag name (must match the name from the scope of the Component)
   * @param {string} html The html objest in which the tag is located
   * @param {regex} regex Regex for validating the tag name
   */
  parseC(tag, tagName, html, regex) {
    if(!regex.test(tagName)) {
      throw 'Error';
    }
    this.totalBoundElements++;
    const uniqueID = this.componentName + '-' + this.totalBoundElements;
    const component = this.scope[tagName].value;
    const insert = `<span id="${uniqueID}">${component.parse()}</span>`
    return html.replace(tag, insert);
  },

  /**
   * Parses BemUI tags of type R (resource)
   * @param {string} tag Original tag
   * @param {string} tagName Tag name (must either match the name from the scope of the Component or be a firect file name located in the resource folder)
   * @param {string} html The html objest in which the tag is located
   * @param {regex} regex Regex for validating the tag name
   */
  parseR(tag, tagName, html, regex) {
    if(!regex.test(tagName)) {
      return html.replace(tag, `"./resources/${tagName.substring(1,tagName.length-1)}"`);
    } else {
      return html.replace(tag, `"./resources/${this.scope[tagName].value}"`);
    }
  },
}

export default ParseHelpers;