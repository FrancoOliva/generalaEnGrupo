  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      { path: '/anotador/', url: 'anotador.html', },
      { path: '/index/', url: 'index.html', },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

var nJugador1 = "";
var nJugador2 = "";

var pJugador1 = 0;
var pJugador2 = 0;

var columna_jugador = "";

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    console.log('Estoy en la página anotador');

    $$('#nombreJ1').text(nJugador1); 
    $$('#nombreJ2').text(nJugador2);

    $$('#puntajeJ1').text(pJugador1);
    $$('#puntajeJ2').text(pJugador2);

    $$('#btnVolver').on('click', volverInicio );
    $$('#btnReiniciarPuntos').on('click', reiniciarPuntos );

    $$('button').on('click', function(){ mostrarCategoria(this.id); });

    $$('#l1').on('click', function(){ modificarPuntos(this.id);    });
    $$('#l2').on('click', function(){ modificarPuntos(this.id);    });
    $$('#l3').on('click', function(){ modificarPuntos(this.id);    });
    $$('#l4').on('click', function(){ modificarPuntos(this.id);    });
    $$('#l5').on('click', function(){ modificarPuntos(this.id);    });

    $$('#servido').on('click', function(){ modificarPuntos(this.id);    });
    $$('#nServido').on('click', function(){ modificarPuntos(this.id);    });
    $$('#tachar').on('click', function(){ modificarPuntos(this.id);    });
    
    
})



$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);

    $$('#btnIngresar').on('click', tomarValores );
    
    
    
})

// Función botón Ingresar

function tomarValores(){

    nJugador1 = $$('#jugador1').val();
    nJugador2 = $$('#jugador2').val();

    mainView.router.navigate('/anotador/');

}

function volverInicio(){
    mainView.router.navigate('/index/');
}

function reiniciarPuntos(){
    console.log('Estoy reiniciando puntos supuestamente ..');
}

function mostrarCategoria(id){
    
    columna_jugador = id;
    
    var categoria = id[3];

    switch (categoria){
        case "1":
            for (i = 0; i < 5; i++) {
            var mostrarPuntos = 1 * (i+1);
            $$('#l'+(i+1)).html(mostrarPuntos);
        } 
        break;
        case "2":
            for (i = 0; i < 5; i++) {
            var mostrarPuntos = 2 * (i+1);
            $$('#l'+(i+1)).html(mostrarPuntos);
        } 
        break;
        case "3":
            for (i = 0; i < 5; i++) {
            var mostrarPuntos = 3 * (i+1);
            $$('#l'+(i+1)).html(mostrarPuntos);
        } 
        break;
        case "4":
            for (i = 0; i < 5; i++) {
            var mostrarPuntos = 4 * (i+1);
            $$('#l'+(i+1)).html(mostrarPuntos);
        } 
        break;
        case "5":
            for (i = 0; i < 5; i++) {
            var mostrarPuntos = 5 * (i+1);
            $$('#l'+(i+1)).html(mostrarPuntos);
        } 
        break;
        case "6":
            for (i = 0; i < 5; i++) {
            var mostrarPuntos = 6 * (i+1);
            $$('#l'+(i+1)).html(mostrarPuntos);
        } 
        break;

        default:
        break;

    }
    console.log('Mostrando categorías!');
    console.log(columna_jugador);
    console.log(categoria);    
        

}

function modificarPuntos(id){    
    
    var valor_link = $$("#" + id).text();
    
    if(valor_link == "Tachar"){
        $$("#" + columna_jugador).text("x");
    } else {
        $$("#" + columna_jugador).text(valor_link);
    }

    console.log("Los valores mostrados se ingresaron en las celdas de puntaje.");
    console.log("invocando función sumar");
    
    sumarPuntaje();


}

function sumarPuntaje(){
    
    var jugador = (columna_jugador[0]+columna_jugador[1]);

    console.log("Soy el jugador: "+ jugador);


}