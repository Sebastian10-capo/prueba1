<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validar y sanitizar los datos recibidos
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    // Validación simple
    if (empty($name) || empty($email) || empty($message)) {
        echo "Todos los campos son requeridos.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Correo electrónico no válido.";
        exit;
    }

    // Enviar el mensaje por correo o almacenarlo en la base de datos
    // Aquí puedes agregar tu lógica para enviar el correo electrónico

    echo "Gracias por tu mensaje, nos pondremos en contacto contigo pronto.";
} else {
    echo "Método no permitido.";
}
?>
