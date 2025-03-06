// Función para abrir el modal
function openModal(section) {
    let modalText = '';
    
    switch (section) {
        case 'inicio':
            modalText = '<h2>Bienvenido a nuestra página</h2><p>Esta es la página de inicio de nuestra empresa.</p>';
            break;
        case 'nosotros':
            modalText = '<h2>Nosotros</h2><p>Somos una empresa dedicada a brindar soluciones innovadoras.</p>';
            break;
        case 'mision':
            modalText = '<h2>Misión</h2><p>Nuestra misión es ofrecer productos y servicios de alta calidad.</p>';
            break;
        case 'vision':
            modalText = '<h2>Visión</h2><p>Ser una empresa líder en innovación y tecnología.</p>';
            break;
        case 'contacto':
            modalText = '<h2>Contacto</h2><form id="contactForm" action="contacto.php" method="POST">' +
                        '<label for="name">Nombre:</label><input type="text" id="name" name="name" required>' +
                        '<label for="email">Correo electrónico:</label><input type="email" id="email" name="email" required>' +
                        '<label for="message">Mensaje:</label><textarea id="message" name="message" required></textarea>' +
                        '<button type="submit">Enviar</button></form>';
            break;
        case 'ubicacion':
            modalText = '<h2>Ubicación</h2><p>Estamos ubicados en el centro de la ciudad, calle Ficticia 123.</p>';
            break;
    }

    document.getElementById('modal-text').innerHTML = modalText;
    document.getElementById('modal').style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Enviar formulario usando AJAX
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const formData = new FormData(this);

    fetch('contacto.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Mostrar la respuesta del servidor
        document.getElementById('contactForm').reset(); // Limpiar el formulario
    })
    .catch(error => console.error('Error:', error));
});
