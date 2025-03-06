// Menú de hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Resaltar enlace activo en el menú
document.querySelectorAll('.menu ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        document.querySelectorAll('.menu ul li a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

// Script para enviar mensajes a WhatsApp con la imagen del producto
document.querySelectorAll('.whatsapp-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.getAttribute('data-name');
        const productPrice = productCard.getAttribute('data-price');
        const productImage = productCard.getAttribute('data-image');

        // Mensaje predefinido
        const message = `Hola, me interesa la ${productName} (${productPrice}). Aquí está la imagen: ${window.location.origin}/${productImage}`;

        // Enlace de WhatsApp
        const whatsappLink = `https://wa.me/+573011058414text=${encodeURIComponent(message)}`;

        // Redirigir a WhatsApp
        window.open(whatsappLink, '_blank');
    });
});


