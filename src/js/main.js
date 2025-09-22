/* js */

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const sections = document.querySelectorAll('.section');
    
    // 1. sticky navbar and navbar size adjustment
    let lastScrollY = window.scrollY;
    
    function handleNavbarScroll() {
        const currentScrollY = window.scrollY;
        
        // add scroll style
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }
    
    // 2. position indicator - highlight current section
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 50;
        
        let currentSection = '';
        
        // check each section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // special handling: when scrolling to the bottom of the page, highlight the last menu item
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
            currentSection = 'contact';
        }
        
        // update active state of navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // 3. smooth scroll
    function smoothScrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - navbar.offsetHeight;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // 4. mobile hamburger menu
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // prevent background scroll
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // 5. close mobile menu
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // 6. throttle function - optimize scroll performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // 7. add fade in animation
    function addFadeInAnimation() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // observe all section elements
        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    // event listeners
    
    // scroll event - use throttle to optimize performance
    window.addEventListener('scroll', throttle(() => {
        handleNavbarScroll();
        updateActiveNavLink();
    }, 16)); // ~60fps
    
    // navigation link click event
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // smooth scroll to target section
            smoothScrollToSection(targetSection);
            
            // close mobile menu
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // hamburger menu click event
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // click menu outside to close mobile menu
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target) && 
            navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // window size change to close mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // ESC key to close mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    // 7. Modal function - course information window
    function initModal() {
        const modal = document.getElementById('courses-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('courses-content');
        const closeBtn = document.querySelector('.modal-close');
        const courseBtns = document.querySelectorAll('.courses-btn');
        
        if (!modal || !courseBtns.length) return;
        
        // course data
        const coursesData = {
            uiuc: {
                title: 'University of Illinois Urbana-Champaign - Selected Courses',
                categories: [
                    {
                        name: 'Core Computer Science',
                        icon: 'fas fa-microchip',
                        courses: [
                            { code: 'CS 425', name: 'Distributed Systems' },
                            { code: 'CS 411', name: 'Database Systems' },
                            { code: 'CS 427', name: 'Software Engineering' },
                            { code: 'CS 423', name: 'Operating Systems' },
                            { code: 'CS 435', name: 'Computer Networks' }
                        ]
                    },
                    {
                        name: 'Advanced Topics',
                        icon: 'fas fa-brain',
                        courses: [
                            { code: 'CS 445', name: 'Machine Learning' },
                            { code: 'CS 409', name: 'Web Development' },
                            { code: 'CS 438', name: 'Computer Architecture' },
                            { code: 'CS 421', name: 'Programming Languages' },
                            { code: 'CS 463', name: 'Cybersecurity' }
                        ]
                    },
                    {
                        name: 'Mathematics & Theory',
                        icon: 'fas fa-calculator',
                        courses: [
                            { code: 'CS 374', name: 'Data Structures and Algorithms' }
                        ]
                    }
                ]
            },
            osu: {
                title: 'The Ohio State University - Selected Courses',
                categories: [
                    {
                        name: 'Programming & Development',
                        icon: 'fas fa-code',
                        courses: [
                            { code: 'CSE 3241', name: 'Database' },
                            { code: 'CSE 3901', name: 'Software Development' },
                            { code: 'CSE 3521', name: 'Machine Learning' },
                            { code: 'CSE 2331', name: 'Data Structure' },
                            { code: 'CSE 2421', name: 'Algorithm' }
                        ]
                    },
                    {
                        name: 'Systems & Architecture',
                        icon: 'fas fa-server',
                        courses: [
                            { code: 'CSE 2431', name: 'Computer Organization' },
                            { code: 'CSE 3232', name: 'Web Development' }
                        ]
                    },
                    {
                        name: 'Programming Languages',
                        icon: 'fas fa-file-code',
                        courses: [
                            { code: 'CSE 1223', name: 'Python' },
                            { code: 'CSE 2221', name: 'C++' }
                        ]
                    },
                    {
                        name: 'Mathematics',
                        icon: 'fas fa-square-root-alt',
                        courses: [
                            { code: 'MATH 1151', name: 'Linear Algebra' },
                            { code: 'MATH 1172', name: 'Calculus' },
                            { code: 'STAT 3470', name: 'Probability and Statistics' }
                        ]
                    }
                ]
            }
        };
        
        // generate course HTML content
        function generateCoursesHTML(schoolData) {
            return schoolData.categories.map(category => `
                <div class="course-category">
                    <h4>
                        <i class="${category.icon}"></i>
                        ${category.name}
                    </h4>
                    <div class="course-list">
                        ${category.courses.map(course => `
                            <div class="course-item">
                                <div class="course-code">${course.code}</div>
                                <div class="course-name">${course.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
        
        // open modal
        function openModal(school) {
            const schoolData = coursesData[school];
            if (!schoolData) return;
            
            modalTitle.textContent = schoolData.title;
            modalContent.innerHTML = `<div class="courses-grid">${generateCoursesHTML(schoolData)}</div>`;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // add ESC key support
            document.addEventListener('keydown', handleEscapeKey);
        }
        
        // close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscapeKey);
        }
        
        // ESC key to close modal
        function handleEscapeKey(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
        
        // event listeners
        courseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const school = btn.getAttribute('data-school');
                openModal(school);
            });
        });
        
        // close button
        closeBtn.addEventListener('click', closeModal);
        
        // click background to close modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        console.log('course modal function initialized');
    }

    // 8. carousel function
    function initCarousel() {
        const carouselTrack = document.getElementById('carousel-track');
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');
        
        if (!carouselTrack || !prevBtn || !nextBtn) return;
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        function updateCarousel() {
            // update track position
            const translateX = -currentSlide * (100 / totalSlides);
            carouselTrack.style.transform = `translateX(${translateX}%)`;
            
            // update active state
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            
            // update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }
        
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }
        
        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateCarousel();
            }
        }
        
        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }
        
        // event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // indicators click event
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });
        
        // keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // initialize
        updateCarousel();
    }

    // initialize
    function init() {
        // initial check navbar state
        handleNavbarScroll();
        updateActiveNavLink();
        
        // add fade in animation observer
        addFadeInAnimation();
        
        // initialize carousel
        initCarousel();
        
        // initialize modal function
        initModal();
        
        // add loading animation
        document.body.classList.add('loaded');
        
        console.log('Jimin\'s Page loaded!');
    }
    
    // initialize after page load
    init();
    
    // extra function: click logo to go to top
    const navBrand = document.querySelector('.nav-brand');
    navBrand.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // extra function: keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // use number keys 1-5 to quickly navigate to different sections
        const keyMap = {
            '1': 'about',
            '2': 'experience',
            '3': 'projects',
            '4': 'misc',
            '5': 'contact'
        };
        
        if (keyMap[e.key]) {
            smoothScrollToSection(keyMap[e.key]);
        }
    });
});
