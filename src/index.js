export default (
  editor,
  opts
) => {

  let c = opts;
  let defaults = {
    'selected': '#000000',
    'resizer': '#000000',
    'toolbar': '#000000',
    'badge': '#000000',
    'highlighter': '#000000'
  };
  if(!c.main_color){
    for (let name in defaults) {
      if (!(name in c))
        c[name] = defaults[name];
    }
  }else{
    for (let name in defaults) {
      c[name] = opts.main_color;
    }
  }

  editor.on('load', () => {
    createHtmlElem(
      'style',
      editor.Canvas.getBody(),
      {
        innerHTML: '.gjs-selected { outline: 2px solid '+c.selected+' !important; }'
      }
    );

    createHtmlElem(
      'style',
      document.body,
      {
        innerHTML: '.gjs-resizer-h{ border-color:'+c.resizer+' !important; } .gjs-toolbar{ background-color:'+c.toolbar+' !important; } .gjs-com-badge, .gjs-com-badge-red, .gjs-badge{ background-color:'+c.badge+' !important; } .gjs-cv-canvas .gjs-highlighter, .gjs-cv-canvas .gjs-highlighter-sel{ outline: 1px solid '+c.highlighter+' !important; }'
      }
    );
  })


  
};

/**
 *
 * @param {string} type
 * @param {HTMLElement} container
 * @param {Object} properties
 * @return {HTMLElement}
 */
 function createHtmlElem(type, container, properties) {
  let elem = document.createElement(type);
  setElementProperty(elem, properties);
  container && container.appendChild(elem);
  return (elem);
}

/**
 *
 * @param {Object} elem
 * @param {Object} properties
 */
function setElementProperty(elem, properties) {
  if (properties) {
    for (let key in properties) {
      if (typeof properties[key] === 'object') {
        setElementProperty(elem[key], properties[key]);
      } else {
        elem[key] = properties[key];
      }
    }
  }
}