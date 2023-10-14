/**
 * Este código controla una animación paso a paso de un menú de navegación. Configura varios elementos y aplica diferentes estilos para crear el efecto de animación deseado.
 * @param Ninguno
 * @returns Ninguno
 */
/**
 * Inicializa variables para los elementos pasos, contenedor, elementos, anclajes, botón de reinicio y botón de reproducción.
 * @var {jQuery} pasos: el objeto jQuery que representa el elemento pasos.
 * @var {jQuery} contenedor: el objeto jQuery que representa el elemento contenedor.
 * @var {jQuery} elementos: el objeto jQuery que representa los elementos de la lista dentro del elemento contenedor.
 * @var {jQuery} anclajes: el objeto jQuery que representa los elementos de anclaje dentro de los elementos de la lista.
 * @var {jQuery} reset: el objeto jQuery que representa el elemento del botón de reinicio.
 * @var {jQuery} play: el objeto jQuery que representa el elemento del botón de reproducción.
 */

var steps = $('.steps'),
  wrapper = $('.cn-wrapper'),
  items = $('.cn-wrapper li'),
  anchors = $('.cn-wrapper li a'),
  reset = $('.reset-button'),
  play = $('.play-button');

/**
 * Maneja el evento de clic del botón de paso.
 * @param {Evento} e: el objeto de evento de clic.
 * @returns Ninguno
 */
var step = 1;
$('.step-button').on('click', function (e) {
  e.preventDefault();
  $('.reset-button').removeAttr('disabled');
  play.attr('disabled', 'disabled');

  switch (step) {
    case 1: step1(); break;
    case 2: step2(); break;
    case 3: step3(); break;
    case 4: step4(); break;
    case 5: step5(); break;
    case 6: step6(); break;
    case 7: step7(); break;
  }
  step++;
  if (step > 7) {
    reset.trigger('click');
    step = 1;
  }
});

/**
 * Mueve los elementos al centro del contenedor y oculta el desbordamiento.
 * @returns Ninguno
 */
function step1() {
  items.css({
    'left': '50%',
    'top': '50%',
    'margin-top': '-1.3em',
    'margin-left': '-10em',
    'overflow': 'hidden'
  });
 

}

/**
 * Realiza el paso 2 de un proceso. Gira cada elemento de una colección y aplica una transformación.
 * @returns Ninguno
 */
function step2() {
  items.each(function (i, el) {
    var angle = i * 40 - 10;
    $(this).css({
      'transform': 'rotate(' + angle + 'deg) skew(50deg)'
    });
  });
  
}

/**
 * Realiza el paso 3 de un proceso específico.
 * -Aplica transformaciones y estilos CSS a un conjunto de anclajes.
 * -Actualiza el contenido HTML de un elemento específico.
 * @returns Ninguno
 */
function step3() {
  anchors.css({
    'transform': 'skew(-50deg) rotate(-70deg) scale(1)',
    'border-radius': '50%',
    'text-align': 'center',
    'padding-top': '2em'
  });
  
}

/**
 * Aplica un radio de borde del 50% al elemento contenedor y actualiza el contenido del elemento de pasos.
 * @returns Ninguno
 */
function step4() {
  wrapper.css('border-radius', '50%');

}

/**
 * Establece la propiedad CSS 'desbordamiento' del elemento contenedor en 'oculto' y actualiza el contenido HTML del elemento de pasos.
 * Esto oculta cualquier contenido que exceda las dimensiones del elemento contenedor.
 * @returns Ninguno
 */
function step5() {
  wrapper.css('overflow', 'hidden');

}

/**
 * Realiza el paso 6 de un proceso específico.
 * -Establece la propiedad CSS 'parte inferior' del elemento contenedor en '-13em'.
 * -Actualiza el contenido HTML del elemento de pasos para indicar que el contenedor (navegación completa) está ubicado en la parte inferior.
 * -Elimina el atributo 'deshabilitado' del elemento de reinicio.
 * @returns Ninguno
 */
function step6() {
  wrapper.css('bottom', '-13em');
  reset.removeAttr('disabled');
}

/**
 * Controlador de eventos para el evento 'clic' en el botón para el reinicio.
 * Restablece los estilos de todos los elementos, establece el contador de pasos en 1,
 * activa el botón de reproducción y los botones de paso, desactiva el botón de reinicio,
 * y actualiza el contenido del elemento de pasos.
 * @returns Ninguno
 */
reset.on('click', function () {
  $('*').attr('style', '');
  step = 1;
  play.removeAttr('disabled');
  $('.step-button').removeAttr('disabled');
  $(this).attr('disabled', 'disabled');
});



