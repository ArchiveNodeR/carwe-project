// ===== АНИМАЦИЯ ПРИ СКРОЛЛЕ =====
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Когда до элемента остается 100px, он появляется

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Проверяем сразу при загрузке
});