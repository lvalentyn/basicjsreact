window.addEventListener('DOMContentLoaded', () => {
    // Tabs header
    const tabContent = document.querySelectorAll('.tabcontent'),
        tabsWrapper = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item');
    function hideContent() {
        tabContent.forEach(i => {
            i.classList.add('hide');
            i.classList.remove('show', 'fade');
        })
        tabs.forEach(i => {
            i.classList.remove('tabheader__item_active');
        })
    }
    function showContent(i = 0) {
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideContent();
    showContent();
    tabsWrapper.addEventListener('click', (e) => {
        target = e.target;
        if (target && target.matches('.tabheader__item')) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideContent();
                    showContent(index);
                }
            })
        }
    });
    // Timer footer
    const deadline = '2021-06-30';
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / 1000 * 60 * 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
    // modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
    function openModal() {
        modal.classList.toggle('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    function closeModal() {
        modal.classList.toggle('hide');
        document.body.style.overflow = '';
    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && !modal.classList.contains('hide')) {
            closeModal();
        }
    });
    const modalTimerId = setTimeout(openModal, 5000);
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
});