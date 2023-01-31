<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "your-email-address@example.com";
    $subject = "Message from portfolio website";
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body = "
      <html>
      <head>
      <title>$subject</title>
      </head>
      <body>
      <h2>Message:</h2>
      <p>Name: $name</p>
      <p>Email: $email</p>
      <p>Message: $message</p>
      </body>
      </html>
    ";
    if (mail($to, $subject, $body, $headers)) {
      echo "Message sent successfully!";
    } else {
      echo "Error sending message. Please try again later.";
    }
  }
?>
