document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;
    alert(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
});

document.querySelector('img').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('img').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
