<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Configura tu email y datos para el envío
    $to = "tucorreo@example.com";
    $subject = "Nuevo mensaje de contacto de $name";
    $headers = "From: $email\r\n";
    $body = "Nombre: $name\nEmail: $email\n\nMensaje:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje, $name. Nos pondremos en contacto pronto.";
    } else {
        echo "Hubo un problema al enviar tu mensaje. Inténtalo más tarde.";
    }
}
