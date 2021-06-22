window.addEventListener('DOMContentLoaded', () => {
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
});