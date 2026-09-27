// Бургер меню с анимациями
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    const header = document.querySelector('.site-header');
    
    // Премиум бургер меню
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
            burger.setAttribute('aria-expanded', 'true');
            
            // Добавляем класс для анимации пунктов меню
            const menuItems = document.querySelectorAll('.mobile-menu-item');
            menuItems.forEach((item, index) => {
                item.style.animation = `slideInRight 0.5s ease ${index * 0.1}s forwards`;
            });
        } else {
            body.style.overflow = '';
            burger.setAttribute('aria-expanded', 'false');
            
            // Сбрасываем анимации
            const menuItems = document.querySelectorAll('.mobile-menu-item');
            menuItems.forEach(item => {
                item.style.animation = 'none';
            });
        }
    });
    
    // Премиум аккордеон с плавными анимациями
    const mobileItems = document.querySelectorAll('.mobile-menu-item-has-children');
    
    mobileItems.forEach(item => {
        const link = item.querySelector('a');
        const subMenu = item.querySelector('.mobile-sub-menu');
        const arrow = item.querySelector('.mobile-dropdown-arrow');
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Плавно закрываем другие пункты
            mobileItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    const otherSubMenu = otherItem.querySelector('.mobile-sub-menu');
                    const otherArrow = otherItem.querySelector('.mobile-dropdown-arrow');
                    
                    otherItem.classList.remove('active');
                    otherSubMenu.style.animation = 'fadeOut 0.3s ease forwards';
                    
                    setTimeout(() => {
                        otherSubMenu.style.display = 'none';
                        otherSubMenu.style.animation = '';
                    }, 300);
                    
                    if (otherArrow) {
                        otherArrow.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // Анимируем текущий пункт
            if (item.classList.contains('active')) {
                // Закрываем
                subMenu.style.animation = 'fadeOut 0.3s ease forwards';
                setTimeout(() => {
                    subMenu.style.display = 'none';
                    subMenu.style.animation = '';
                }, 300);
                
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            } else {
                // Открываем
                subMenu.style.display = 'block';
                subMenu.style.animation = 'fadeIn 0.4s ease forwards';
                
                // Анимируем каждый пункт подменю
                const subItems = subMenu.querySelectorAll('li');
                subItems.forEach((subItem, index) => {
                    subItem.style.animation = `slideDown 0.3s ease ${index * 0.1}s forwards`;
                });
                
                if (arrow) {
                    arrow.style.transform = 'rotate(180deg)';
                }
            }
            
            item.classList.toggle('active');
        });
    });
    
    // Премиум эффект при скролле
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Закрытие при клике на ссылку с анимацией
    const mobileLinks = document.querySelectorAll('.mobile-menu a:not(.mobile-menu-item-has-children > a)');
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Анимация закрытия
            const menuItems = document.querySelectorAll('.mobile-menu-item');
            menuItems.forEach(item => {
                item.style.animation = 'slideOutRight 0.3s ease forwards';
            });
            
            setTimeout(() => {
                burger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
                burger.setAttribute('aria-expanded', 'false');
                
                // Сбрасываем анимации
                menuItems.forEach(item => {
                    item.style.animation = '';
                });
                
                // Закрываем все подменю
                mobileItems.forEach(item => {
                    item.classList.remove('active');
                    const subMenu = item.querySelector('.mobile-sub-menu');
                    const arrow = item.querySelector('.mobile-dropdown-arrow');
                    
                    if (subMenu) {
                        subMenu.style.display = 'none';
                    }
                    
                    if (arrow) {
                        arrow.style.transform = 'rotate(0deg)';
                    }
                });
            }, 300);
        });
    });
    
    // Закрытие при ресайзе
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1023 && mobileMenu.classList.contains('active')) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
            burger.setAttribute('aria-expanded', 'false');
            
            // Сбрасываем все подменю
            mobileItems.forEach(item => {
                item.classList.remove('active');
                const subMenu = item.querySelector('.mobile-sub-menu');
                const arrow = item.querySelector('.mobile-dropdown-arrow');
                
                if (subMenu) {
                    subMenu.style.display = 'none';
                }
                
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            });
        }
    });
});

// Добавляем анимацию для fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-30px);
        }
    }
`;
document.head.appendChild(style);

// Анимация появления футера при скролле
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.site-footer');
    
    if (footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.opacity = '1';
                    footer.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(footer);
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // ========== АНИМАЦИЯ ЧИСЕЛ ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateNumber(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        function formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current));
            }
        }, 16);
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(animateNumber);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
//     // ========== ПАРАЛЛАКС ЭФФЕКТ ==========
//     let ticking = false;
    
//     window.addEventListener('scroll', () => {
//         if (!ticking) {
//             window.requestAnimationFrame(() => {
//                 const scrolled = window.pageYOffset;
//                 const heroVideos = document.querySelector('.hero-videos');
//                 if (heroVideos) {
//                     const translateY = Math.min(scrolled * 0.3, 100);
//                     heroVideos.style.transform = `translateY(${translateY}px)`;
//                 }
//                 ticking = false;
//             });
//             ticking = true;
//         }
//     });
    
    // ========== ЗАПУСК ВИДЕО ==========
    const video = document.querySelector('.hero-video');
    if (video) {
        video.play().catch(e => console.log('Autoplay failed:', e));
    }
});



/* JavaScript для открытия/закрытия faq*/

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Закрыть все другие
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Открыть/закрыть текущий
            item.classList.toggle('active');
        });
    });
    
    // Открыть первый вопрос по умолчанию
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});

//очистка формы при нажатии на кнопки в форме CTA
function clearFormFields() {
    const form = document.getElementById('cta-form');
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        if (input.tagName === 'SELECT') {
            input.selectedIndex = 0;
        } else {
            input.value = '';
        }
    });
    
    return true;
}











