document.querySelector('.one_next').addEventListener('click', page2);

function page2 (){
    document.querySelector('main').style.transform = 'translate3d(0px, -100vh, 0px)';
    document.querySelector('.slide_container').style.top = '110%';
    document.querySelector('.sec1').classList.remove('activeImage');
    document.querySelector('.sec2').classList.add('activeImage');
    window.setTimeout(function moveside(){
        document.querySelector('.slide_container').style.left = '30%';
        document.querySelector('#two .img_container').style.left = '70%'
        document.querySelector('#two .img_container').style.opacity = '1'
    }, 1000)
}

document.querySelector('.two_next').addEventListener('click', page3);

function page3 (){
    document.querySelector('main').style.transform = 'translate3d(0px, -200vh, 0px)';
    document.querySelector('.slide_container').style.top = '210%';
    document.querySelector('.sec2').classList.remove('activeImage');
    document.querySelector('.sec3').classList.add('activeImage');
   
}

document.querySelector('.three_next').addEventListener('click', page4);

function page4 (){
    document.querySelector('main').style.transform = 'translate3d(0px, -300vh, 0px)';
    document.querySelector('.slide_container').style.top = '310%';
    document.querySelector('.sec3').classList.remove('activeImage');
    document.querySelector('.sec4').classList.add('activeImage');
    window.setTimeout(function moveside(){
        document.querySelector('.sec5').classList.add('activeImage')
        document.querySelector('.sec5').style.left = '70%'
    }, 1000)
   
}