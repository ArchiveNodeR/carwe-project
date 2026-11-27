// ===== МОБИЛЬНОЕ МЕНЮ =====
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    // Открытие/закрытие по клику на бургер
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Закрытие меню при клике на любую ссылку внутри него
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

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

