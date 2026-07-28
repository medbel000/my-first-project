document.addEventListener('DOMContentLoaded', () => {
    // زر ترحيب المستخدم الأصلي
    const welcomeBtn = document.getElementById('welcome-btn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', () => {
            alert('أهلاً بك! يسعدني جداً تواصلك معي في مشروعي الأول. ❤️');
        });
    }

    // منطق تبديل الوضع (Light/Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // وظيفة لتطبيق السمة المفضلة
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        } else {
            document.body.classList.remove('dark-theme');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        }
    };

    // التحقق من وجود السمة المحفوظة في LocalStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-theme');
            const newTheme = isDark ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});
