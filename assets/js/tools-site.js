$(document).ready(function(){
$('#myForm').submit(function(e){ //en el evento submit del fomulario (al pinchar en enviar) se ejecuta todo lo siguiente:
if ($('#name').val().length<4 || $('#message').val().length<4){
                    alert('Los campos "nombre" o "mensaje"\nparecen incorrectos');
                    return false//comprobamos la longitud de los campos nombre y mensaje y, si cualquiera de los dos es menor que 4, mostramos el mensaje y no enviamos el formulario.
                }
//en caso contrario se ejecuta lo siguiente:
e.preventDefault();  //detenemos el comportamiento por defecto al pinchar en enviar, que sería leer los datos del formulario con el archivo 'enviarcorreo.php'
var url = $(this).attr('action');  //obtenemos en 'url' la acción del formulario (enviarcorreo.php)
var datos = $(this).serialize(); // obtenemos en 'datos' los datos del formulario
$.ajax({
 //y los enviamos via ajax al archivo 'enviarcorreo.php' (variable 'url')
  type: 'POST',//el tipo de envío
  url: url,//la url de envío (en este caso 'enviarcorreo.php'
  data: datos,//todos los datos a enviar (que están 'serializados' en 'datos')
  beforeSend: mostrarLoader, //función que definimos más abajo
  success: mostrarRespuesta  //función que definimos más abajo
});

          });

})
        function mostrarLoader(){
              $('#loader_gif').fadeIn("slow"); //mostramos el loader de ajax (el div dentro del formulario que describimos en el código HTML anterior.
        };
        function mostrarRespuesta (responseText){
              alert("Mensaje enviado: "+responseText);  //responseText es lo que devuelve la página 'enviarcorreo.php'. Si en 'enviarcorreo.php' hacemos echo "Hola" , la variable responseText = "Hola" . Aqui hacemos un alert con el valor de response text
              $("#loader_gif").fadeOut("slow"); // hacemos desaparecer el loader de ajax
              $('#nombre').val(' ');//con esto establecemos el nuevo valor de los campos
              $('#email').val(' ');
              $('#message').val(' ');
        }


