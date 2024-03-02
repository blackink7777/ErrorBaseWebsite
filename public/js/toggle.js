document.addEventListener('DOMContentLoaded', function () {
    const switchElement = document.getElementById('switch');
    var logo = document.querySelector('.logo img');

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('light-mode');
            logo.src = 'images/white_logo.png';
            localStorage.setItem('lightmode', 'light')
        } else {
            document.body.classList.remove('light-mode');
            logo.src = 'images/black_logo.png';
            localStorage.setItem('lightmode', 'black')
        }
    });

    const mode = localStorage.getItem('lightmode')
    if (mode === 'light') {
        document.body.classList.add('no-transition');
        switchElement.checked = true
        document.body.offsetHeight;
        document.body.classList.remove('no-transition');
        document.body.classList.add('light-mode');
        logo.src = 'images/white_logo.png';
        localStorage.setItem('lightmode', 'light')

    } else {
        document.body.classList.add('no-transition');
        switchElement.checked = false
        document.body.offsetHeight;
        document.body.classList.remove('no-transition');
        document.body.classList.remove('light-mode');
        logo.src = 'images/black_logo.png';
        localStorage.setItem('lightmode', 'black')
    }
});

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var fadeStart = 250;
    var fadeUntil = 400;

    var fadingTextOpacity = 1 - (scrollPosition - fadeStart) / (fadeUntil - fadeStart);
    var nextSectionOpacity = (scrollPosition - fadeStart) / (fadeUntil - fadeStart);

    document.querySelector('.intro-section').style.opacity = fadingTextOpacity;
    document.querySelector('.next-section').style.opacity = nextSectionOpacity;
});



window.onscroll = function () {
    var introSection = document.querySelector('.intro-section');
    if (window.scrollY > 400) {
        introSection.style.display = 'none';
    } else {
        introSection.style.display = 'block'; 
    }
};


