/**
 *Adjunta un detector de eventos de clic al elemento del botón de reproducción.
 *Cuando se hace clic en el botón de reproducción, realiza una serie de pasos con retrasos.
 *@param {jQuery} play: el elemento del botón de reproducción.
 *@returns Ninguno
 */
play = $('.play-button');
play.on('click', function (e) {

    e.preventDefault();
    $(this).attr('disabled', 'disabled');
    $('.step-button').attr('disabled', 'disabled');
  
    step1();
  
    setTimeout(function () {
      step2();
    }, 2000);
  
    setTimeout(function () {
      step3();
    }, 5000);
  
    setTimeout(function () {
      step4();
    }, 10000);
  
    setTimeout(function () {
      step5();
    }, 15000);
  
    setTimeout(function () {
      step6();
    }, 18000);
  
    setTimeout(function () {
      step7();
    }, 21000);
  
  });
  