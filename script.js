const moveDown = document.querySelector('.one_next');

moveDown.addEventListener('click', nextPage);

function nextPage (){
    document.querySelector('main').style.transform = 'translate3d(0px, -100vh, 0px)';
    document.querySelector('.sec1').classList.remove('activeImage');
    document.querySelector('.sec2').classList.add('activeImage');
    document.querySelector('.slide_container').style.top = '160%';
    window.setTimeout(function moveside(){
        document.querySelector('.slide_container').style.marginLeft = '-400px'
    }, 1000)
}

