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