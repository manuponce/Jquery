/**
 * Configura controladores de eventos para los botones "ocultar" y "mostrar".
 * Cuando se hace clic en el botón "ocultar", se oculta el elemento con el id "Imagen de remplazo",
 * actualiza el texto del elemento con el id "titulosub" a "Método hide()", y actualiza
 * el texto del elemento con el id "textosub" para proporcionar una explicación del método hide().
 * Al hacer clic en el botón "show", se muestra el elemento con el id "ImagenEjemplo",
 * actualiza el texto del elemento con id "titulosub" a "Método show()", y actualiza
 * el texto del elemento con el id "textosub".
 */
$(document).ready(function () {
    $("#hide").click(function () {
      $("#Imagen de remplazo").hide();
      $("#titulosub").text("Método hide()");
      $("#textosub").text("El método .hide() en jQuery se utiliza para ocultar elementos HTML en una página web. Al llamar a este método en un elemento, el elemento se vuelve invisible en la página, pero su espacio en el diseño todavía se reserva, es decir, no afecta el flujo del contenido en la página");
  
    });
    $("#show").click(function () {
      $("#ImagenEjemplo").show();
  
      $("#titulosub").text(function (text) {
        $("#titulosub").text("Método show()");
        $("#textosub").text("El método .show() en jQuery se utiliza para hacer visible un elemento HTML que previamente fue ocultado con .hide(). Cuando se llama a .show() en un elemento oculto, este se volverá visible en la página y ocupará su espacio en el diseño, restaurando su visibilidad en la página web.");
  
      });
    });
  });
  
  /**
   * Ejecuta el código dentro de la función cuando el documento está listo.
   * Agrega detectores de eventos de clic a los elementos con los ID "hide" y "show".
   * Cuando se hace clic en el elemento "hide", el elemento con el ID "ImagenEjemplo" se oculta.
   * Al hacer clic en el elemento "show" se muestra el elemento con el ID "Imagendereplazo".
   * @returns Ninguno
   */
  $(document).ready(function () {
    $("#hide").click(function () {
      $("#ImagenEjemplo").hide();
  
    });
    $("#show").click(function () {
      $("#Imagenderemplazo").show();
  
    });
  });
  
  /**
   * Configura controladores de eventos para los botones de desvanecimiento y desvanecimiento.
   * Cuando se hace clic en el botón de desvanecimiento, se desvanece el elemento "#ImagenEjemplo",
   * se desvanece en el elemento "#Imagendereplazo", y actualiza el texto de "#titulosub" y "#textosub".
   * Cuando se hace clic en el botón de desvanecimiento, se desvanece en el elemento "#ImagenEjemplo" y actualiza el texto de "#titulosub" y "#textosub".
   * @returns Ninguno
   */
  $(document).ready(function () {
    $("#fadeout").click(function () {
      $("#ImagenEjemplo").fadeOut();
      $("#Imagenderemplazo").fadeIn();
      $("#titulosub").text("Método fadeOut()");
      $("#textosub").text("El método fadeOut se utiliza para hacer que un elemento HTML sea gradualmente menos visible disminuyendo su opacidad. Al igual que fadeIn, puedes controlar la velocidad de la animación especificando su duración en milisegundos. Este método es útil para hacer que un elemento desaparezca suavemente de la página.");
    });
  
    $("#fadein").click(function () {
      $("#ImagenEjemplo").fadeIn();
      $("#titulosub").text("Método fadeIn()");
      $("#textosub").text("El método fadeIn se utiliza para hacer que un elemento HTML sea gradualmente más visible aumentando su opacidad. Puedes controlar la velocidad de la animación especificando su duración en milisegundos. Este método es útil para hacer que un elemento aparezca de forma suave en la página");
     
    });
  });
  
  /**
   * Configura controladores de eventos para los métodos slideUp y slideDown en jQuery.
   * Cuando se hace clic en el elemento con id "slideup", el elemento con id "ImagenEjemplo" se deslizará hacia arriba,
   * el elemento con id "titulosub" tendrá su texto establecido en "Método slideUp()", y el elemento con id "textosub"
   * su texto tendrá una descripción del método slideUp.
   * Cuando se hace clic en el elemento con id "slidedown", el elemento con id "ImagenEjemplo" se deslizará hacia abajo,
   * el elemento con id "titulosub" tendrá su texto configurado en "Método slideDown()", y el elemento con id "texto
   */
  $(document).ready(function () {
    $("#slideup").click(function () {
      $("#ImagenEjemplo").slideUp();
      $("#titulosub").text("Método slideUp()");
      $("#textosub").text("SlideUp es un método de la biblioteca jQuery que se utiliza para ocultar elementos HTML en una página web de una manera suave y gradual. Cuando se aplica el método .slideUp(), el elemento objetivo se desplaza hacia arriba y, al mismo tiempo, disminuye gradualmente su altura hasta que desaparece por completo de la vista del usuario. Este efecto de deslizamiento hacia arriba puede ser útil para ocultar contenido que ya no es relevante o para proporcionar una experiencia de usuario más agradable al mostrar u ocultar secciones de una página web de manera elegante");
    });
  
    $("#slidedown").click(function () {
      $("#ImagenEjemplo").slideDown();
      $("#titulosub").text("Método slideDown()");
      $("#textosub").text("SlideDown es un método de la biblioteca jQuery que se utiliza para mostrar elementos HTML en una página web con un efecto de deslizamiento hacia abajo suave y gradual. Cuando aplicas el método .slideDown(), el elemento objetivo se desplaza hacia abajo desde su posición oculta y, al mismo tiempo, aumenta gradualmente su altura hasta que es completamente visible para el usuario. Este efecto de deslizamiento hacia abajo puede ser útil para revelar contenido de manera atractiva, como menús desplegables o secciones ocultas de una página web.");
  
    });
     
  
    /**
     * Agrega un detector de eventos de clic al elemento con la identificación "slidetoggle". Cuando se hace clic en el elemento,
     * alterna la visibilidad del elemento con el id "ImagenEjemplo" mediante una animación deslizante. También
     * actualiza el texto de los elementos con los ids "titulosub" y "textosub" con nuevo contenido.
     * @returns Ninguno
     */
    $("#slidetoggle").click(function () {
      $("#ImagenEjemplo").slideToggle();
      $("#titulosub").text("Método slideToggle()");
      $("#textosub").text("Este método es útil cuando deseas proporcionar a los usuarios una forma de mostrar u ocultar contenido de manera interactiva y atractiva. Cuando aplicas .slideToggle(), el elemento objetivo puede estar inicialmente visible o oculto. Si el elemento está visible, se ocultará con un efecto de deslizamiento hacia arriba. Si el elemento está oculto, se mostrará con un efecto de deslizamiento hacia abajo. Esto crea una transición suave y agradable entre los estados visibles y ocultos del elemento.");
     
  });
  });
  
  /**
   * Ejecuta el bloque de código dado cuando el documento está completamente cargado y listo.
   * Vincula un evento de clic al elemento con la identificación "animate".
   * Cuando se hace clic en el elemento "animate", se anima el elemento con el id "ImagenEjemplo".
   * La animación cambia el ancho y el alto del elemento al 50% y la opacidad al 10% durante una duración de 1000 milisegundos.
   * @returns Ninguno
   */
  $(document).ready(function () {
    $("#animate").click(function () {
        // Realiza una animación de cambio de tamaño de la imagen
        $("#ImagenEjemplo").animate({
            width: "50%", // Cambia el ancho de la imagen
            height: "50%", // Cambia la altura de la imagen
            opacity: "10%",
        }, 1000); // Duración de la animación en milisegundos (1 segundo en este caso)
        
    });
    
    
  });
  
  /**
   * Ejecuta el código dentro de la función cuando el documento está listo.
   * Agrega un detector de eventos de clic al elemento con la identificación "normal".
   * Cuando se hace clic en el elemento, anima el elemento con el id "ImagenEjemplo"
   * cambiando su ancho, alto y opacidad durante una duración de 1000 milisegundos.
   * @returns Ninguno
   */
  $(document).ready(function () {
    $("#normal").click(function () {
        // Realiza una animación de cambio de tamaño de la imagen
        $("#ImagenEjemplo").animate({
            width: "100%", // Cambia el ancho de la imagen
            height: "100%", // Cambia la altura de la imagen
            opacity: "100%",
        }, 1000); // Duración de la animación en milisegundos (1 segundo en este caso)
    });
    
  });
  