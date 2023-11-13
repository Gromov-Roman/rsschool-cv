hljs.highlightAll();

const aside = document.querySelector('aside');
const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
    if (hamburger.classList.contains('opened')) {
        hamburger.classList.remove('opened');
        aside.style.visibility = 'hidden';
    } else {
        hamburger.classList.add('opened');
        aside.style.visibility = 'visible';
    }
}

hamburger.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 768 && aside.style.visibility === 'hidden') {
        aside.style.visibility = 'visible';
    }
});
