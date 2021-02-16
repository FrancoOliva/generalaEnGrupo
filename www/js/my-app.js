  
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
    
    
})

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);

    $$('#btnIngresar').on('click', tomarValores );
    
    
    
})

// Función botón Ingresar

function tomarValores(){

    nJugador1 = "";
    nJugador2 = "";

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