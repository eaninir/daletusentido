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


 // ==========================================
    // 2. LÓGICA tarjetas  (FLECHAS Y AUTOMÁTICO)
    // ==========================================
const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// 1. Obtener las tarjetas originales
let cards = document.querySelectorAll('.card');

// 2. Clonar la primera y la última tarjeta
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

// 3. Añadir los clones a la pista (Track)
track.appendChild(firstClone); // El primero va al final
track.insertBefore(lastClone, cards[0]); // El último va al inicio

// 4. Actualizar la lista de tarjetas para incluir los clones
cards = document.querySelectorAll('.card');

// Configuración de posiciones
let index = 1; // Empezamos en 1 porque la tarjeta index 0 ahora es el clon
const gap = 20; // Espacio entre tarjetas (CSS)

// Función para calcular el desplazamiento exacto
function getSlideWidth() {
  return cards[0].offsetWidth + gap;
}

// Posicionar el carrusel en la primera tarjeta real al cargar
track.style.transform = `translateX(-${getSlideWidth() * index}px)`;

// Evento Botón Siguiente
nextBtn.addEventListener('click', () => {
  if (index >= cards.length - 1) return; // Evita clicks dobles rápidos
  index++;
  track.style.transition = "transform 0.4s ease-in-out";
  track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
});

// Evento Botón Atrás
prevBtn.addEventListener('click', () => {
  if (index <= 0) return; // Evita clicks dobles rápidos
  index--;
  track.style.transition = "transform 0.4s ease-in-out";
  track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
});

// El truco de magia: Cuando termina la animación, verificamos si es un clon
track.addEventListener('transitionend', () => {
  // Si llegamos al clon del final, saltamos a la primera tarjeta real
  if (cards[index].innerHTML === firstClone.innerHTML) {
    track.style.transition = "none"; // Quitamos la animación para que no se vea el salto
    index = 1;
    track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
  }
  
  // Si llegamos al clon del principio, saltamos a la última tarjeta real
  if (cards[index].innerHTML === lastClone.innerHTML) {
    track.style.transition = "none";
    index = cards.length - 2;
    track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
  }
});

// Re-calcular la posición si el usuario cambia el tamaño de la pantalla (Responsive)
window.addEventListener('resize', () => {
  track.style.transition = "none";
  track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
});