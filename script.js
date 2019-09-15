const moveDown = document.querySelector('.one_next');

moveDown.addEventListener('click', nextPage);

function nextPage (){
    document.querySelector('main').style.transform = 'translate3d(0px, -100vh, 0px)';
    document.querySelector('.sec1').classList.remove('activeImage');
    document.querySelector('.sec2').classList.add('activeImage');
    document.querySelector('.slide_container').style.top = '110%';
    window.setTimeout(function moveside(){
        document.querySelector('.slide_container').style.marginLeft = '-500px';
        document.querySelector('#two .img_container').style.marginLeft = '180px'
        document.querySelector('#two .img_container').style.opacity = '1'
    }, 1000)
}

