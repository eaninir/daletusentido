document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA)
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // ==========================================
    // 2. LÓGICA DEL HERO SLIDER (FLECHAS Y AUTOMÁTICO)
    // ==========================================
    const slides = document.querySelectorAll('.hero-slide');
    const nextBtn = document.getElementById('heroNext');
    const prevBtn = document.getElementById('heroPrev');
    let currentIdx = 0;

    if (slides.length > 0 && nextBtn && prevBtn) {

        // Función central para cambiar de slide
        function showSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            slides[index].classList.add('active');
        }

        // Evento botón Siguiente
        nextBtn.addEventListener('click', () => {
            currentIdx = (currentIdx + 1) % slides.length;
            showSlide(currentIdx);
        });

        // Evento botón Anterior
        prevBtn.addEventListener('click', () => {
            currentIdx = (currentIdx - 1 + slides.length) % slides.length;
            showSlide(currentIdx);
        });

        // Cambio automático e independiente cada 5 segundos (5000ms)
        setInterval(() => {
            currentIdx = (currentIdx + 1) % slides.length;
            showSlide(currentIdx);
        }, 5000);
    }
});
const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("inputNombre");
    const email = document.getElementById("inputEmail");
    const celular = document.getElementById("inputCelular");
    const mensaje = document.getElementById("inputEscribenos");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCelular = /^\+?[0-9]{8,15}$/;

    let formularioValido = true;

    [nombre, email, celular, mensaje].forEach(campo => {
        campo.classList.remove("is-invalid");
    });

    if (nombre.value.trim() === "") {
        nombre.classList.add("is-invalid");
        formularioValido = false;
    }

    if (!regexEmail.test(email.value.trim())) {
        email.classList.add("is-invalid");
        formularioValido = false;
    }

    if (!regexCelular.test(celular.value.trim())) {
        celular.classList.add("is-invalid");
        formularioValido = false;
    }

    if (mensaje.value.trim().length < 10) {
        mensaje.classList.add("is-invalid");
        formularioValido = false;
    }

    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        formulario.submit();
    }
});

const campos = [
    document.getElementById("inputNombre"),
    document.getElementById("inputEmail"),
    document.getElementById("inputCelular"),
    document.getElementById("inputEscribenos")
];

campos.forEach(campo => {
    campo.addEventListener("input", function () {
        campo.classList.remove("is-invalid");
    });
});
