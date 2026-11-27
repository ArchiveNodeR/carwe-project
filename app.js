// ===== МОБИЛЬНОЕ МЕНЮ =====
document.addEventListener("DOMContentLoaded", () => {
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

// ===== ПЕРЕКЛЮЧЕНИЕ ТАБОВ =====
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Классы для активной и неактивной кнопки (из твоего дизайна)
const activeClasses = ['text-brand', 'border-brand'];
const inactiveClasses = ['text-text-secondary', 'border-transparent', 'hover:text-white'];

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab; // Получаем значение data-tab

        // 1. Сбрасываем стили у всех кнопок
        tabButtons.forEach(b => {
            b.classList.remove(...activeClasses);
            b.classList.add(...inactiveClasses);
        });

        // 2. Делаем нажатую кнопку активной
        btn.classList.remove(...inactiveClasses);
        btn.classList.add(...activeClasses);

        // 3. Прячем все панели с контентом
        tabPanels.forEach(panel => {
            panel.classList.add('hidden');
        });

        // 4. Показываем нужную панель
        const activePanel = document.querySelector(`.tab-panel[data-panel="${targetTab}"]`);
        if (activePanel) {
            activePanel.classList.remove('hidden');
        }
    });
});

// ===== АНИМАЦИЯ ПРИ СКРОЛЛЕ =====
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

