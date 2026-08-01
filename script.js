document.addEventListener('DOMContentLoaded', () => {
    // زر ترحيب المستخدم الأصلي
    const welcomeBtn = document.getElementById('welcome-btn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', () => {
            alert('أهلاً بك! يسعدني جداً تواصلك معي في مشروعي الأول. ❤️');
        });
    }

    // منطق زر العودة إلى الأعلى (Back to Top)
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
