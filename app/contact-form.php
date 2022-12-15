<?php
$to = 'work.fds.27@gmail.com';
$email   = substr( $_POST['email'], 0, 64 );
$message = substr( $_POST['message'], 0, 250 );


$body = "E-mail: ".$email."\r\n\r\n";
$body .= "Message: ".$message."\r\n\r\n";

send_mail($to, $body, $email);


function send_mail($to, $body, $email)
{
  $subject = "Message from website";
  $boundary = "--".md5(uniqid(time()));
  $headers = "From: ".$email."\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
  $multipart = "--".$boundary."\r\n";
  $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
  $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

  $body = $body."\r\n\r\n";

  $multipart .= $body;

  $multipart .= "--".$boundary."--\r\n";
  mail($to, $subject, $multipart, $headers);
}