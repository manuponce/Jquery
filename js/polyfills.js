/**
 * Agrega o elimina una clase de un elemento según su estado actual.
 * @param {Element} elem: el elemento para activar la clase.
 * @param {string} c: la clase a alternar.
 * @returns Ninguno
 */
( function( window ) {

'use strict';


/**
 * Comprueba si un elemento tiene una clase específica.
 * @param {HTMLElement} elem: el elemento a comprobar.
 * @param {string} c: el nombre de la clase a verificar.
 * @returns {boolean}: verdadero si el elemento tiene la clase; falso en caso contrario.
 */
function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

/**
 * Un objeto de utilidad para manipular clases CSS en elementos HTML.
 * @property {Función} hasClass: comprueba si un elemento tiene una clase específica.
 * @property {Función} addClass: agrega una clase a un elemento.
 * @property {Función} removeClass: elimina una clase de un elemento.
 * @property {Función} toggleClass: alterna una clase en un elemento.
 * @property {Función} tiene: alias de hasClass.
 * @property {Función} agregar: alias de addClass.
 * @property {Función} eliminar: alias de removeClass.
 * @property {Función} alternar: alias de toggleClass.
 */
var classie = {

  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/* Un polyfill es un fragmento de código JavaScript que se utiliza para llenar las lagunas en la compatibilidad de los navegadores. 
   Su propósito es habilitar características modernas de la web en navegadores más antiguos o menos compatibles que no admiten estas características de forma nativa. 
   Los polyfills son una solución que permite que las aplicaciones web funcionen de manera consistente en una amplia gama de navegadores. */
!window.addEventListener && window.Element && (function () {
    function addToPrototype(name, method) {
        Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
    }
 
    var registry = [];
 
    addToPrototype("addEventListener", function (type, listener) {
        var target = this;
 
        registry.unshift({
            __listener: function (event) {
                event.currentTarget = target;
                event.pageX = event.clientX + document.documentElement.scrollLeft;
                event.pageY = event.clientY + document.documentElement.scrollTop;
                event.preventDefault = function () { event.returnValue = false };
                event.relatedTarget = event.fromElement || null;
                event.stopPropagation = function () { event.cancelBubble = true };
                event.relatedTarget = event.fromElement || null;
                event.target = event.srcElement || target;
                event.timeStamp = +new Date;
 
                listener.call(target, event);
            },
            listener: listener,
            target: target,
            type: type
        });
 
        this.attachEvent("on" + type, registry[0].__listener);
    });
 
    /**
     * Agrega un método personalizado al prototipo de un objeto para eliminar un detector de eventos.
     * @param {string} nombre_método: el nombre del método que se agregará al prototipo.
     * Método @param {función}: la función que se ejecutará cuando se llame al método.
     * @returns Ninguno
     */
    addToPrototype("removeEventListener", function (type, listener) {
        for (var index = 0, length = registry.length; index < length; ++index) {
            if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
                return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
            }
        }
    });
 
    /**
     * Agrega un nuevo método al prototipo de un objeto.
     * @param {cadena} nombre_método: el nombre del método que se va a agregar.
     * @param {función} funciónmétodo: la función que se ejecutará cuando se llame al método.
     * @returns Ninguno
     */
    addToPrototype("dispatchEvent", function (eventObject) {
        try {
            return this.fireEvent("on" + eventObject.type, eventObject);
        } catch (error) {
            for (var index = 0, length = registry.length; index < length; ++index) {
                if (registry[index].target == this && registry[index].type == eventObject.type) {
                    registry[index].call(this, eventObject);
                }
            }
        }
    });
})();

