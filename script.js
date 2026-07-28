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

    /* ---------------------------
       Modal: Privacy Policy
       --------------------------- */
    const privacyBtn = document.getElementById('privacy-btn');
    const privacyModal = document.getElementById('privacy-modal');
    const modalOverlay = privacyModal ? privacyModal.querySelector('.modal-overlay') : null;
    const modalClose = privacyModal ? privacyModal.querySelector('.modal-close') : null;
    let lastFocusedElement = null;

    const handleKeyDown = (e) => {
        if (!privacyModal) return;
        if (e.key === 'Escape') {
            closeModal();
        }
        if (e.key === 'Tab' && privacyModal.classList.contains('open')) {
            // Simple focus trap
            const focusable = Array.from(privacyModal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'))
                .filter(el => el.offsetParent !== null);
            if (focusable.length === 0) {
                e.preventDefault();
                return;
            }
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    };

    const openModal = () => {
        if (!privacyModal) return;
        lastFocusedElement = document.activeElement;
        privacyModal.classList.add('open');
        privacyModal.setAttribute('aria-hidden', 'false');
        // focus first focusable element or close button
        const focusable = privacyModal.querySelector('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])');
        (focusable || modalClose || privacyModal).focus();
        document.addEventListener('keydown', handleKeyDown);
    };

    const closeModal = () => {
        if (!privacyModal) return;
        privacyModal.classList.remove('open');
        privacyModal.setAttribute('aria-hidden', 'true');
        document.removeEventListener('keydown', handleKeyDown);
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    };

    if (privacyBtn) {
        privacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }
    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            // close when clicking the overlay area
            if (e.target && e.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        });
    }
});
