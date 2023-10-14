

// Llamado cuando el usuario hace clic en un nodo. No queremos disparar eventos en el envoltorio del botón

(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');


	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);


	/**
	* Previene la propagación de eventos. Esta es una solución para IE9 / 11 que no admite prevenirDefault
	* 
	* @param e - Objeto de evento de dom
	*/

	function cnhandle(e){
		e.stopPropagation();
	}

	/**
	* El controlador de eventos para los botones de apertura / cierre. Esto es llamado por el controlador de eventos cuando el usuario hace click
	* 
	* @param e - Objeto de evento pasado por el navegador. evento o ventana.
	*/

	function handler(e){

		// Obteiene el objeto del evento para la ventana actual. evento.

		if (!e) var e = window.event;
	 	e.stopPropagation();


	  	// Abre o cierra la navegación.

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}

	/**
	* Abre el botón de navegación y superpone el botón en el DOM.
	*/

	function openNav(){
		open = true;
	    button.innerHTML = "-";
	    classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	}
	/**
	* Cierra la navegación y retira la superposición y abre clases de navegación.
	*/
	function closeNav(){
		open = false;
		button.innerHTML = "+";
		classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper, 'opened-nav');
	}
	document.addEventListener('click', closeNav);

})();

