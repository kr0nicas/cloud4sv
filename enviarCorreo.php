<?php
session_start();


$nombre = $_POST['name'];
$last_name = $_POST['last_name'];
$mail = $_POST['email'];
$subject = $_POST['subject'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre ." " . $last_name ." \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['message'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'ochoa.j@gmail.com';
$asunto= "Web site : ". $subject ;
/*con un simple if conseguimos saber si el mensaje fué enviado o no.
 Dependiendo si fué o no enviado haremos el echo correspondiente, que es la respuesta  que se recogerá en la función mostrarRespuesta en la anterior función de jQuery.*/
include_once $_SERVER['DOCUMENT_ROOT'] . '/securimage/securimage.php';
$securimage = new Securimage();

if ($securimage->check($_POST['captcha_code']) == false) {
  // the code was incorrect
  // you should handle the error so that the form processor doesn't continue

  // or you can use the following code if there is no validation or you do not know how
  echo("The security code entered was incorrect. Please and try again.");
  exit;
}


if ( @mail($para, $asunto, utf8_decode($mensaje), $header)) echo ('correctamente');
else echo('ERROR AL ENVIAR EL MENSAJE');
?>
