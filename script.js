const moveDown = document.querySelector('.one_next');

moveDown.addEventListener('click', nextPage);

function nextPage (){
    document.querySelector('main').style.transform = 'translate3d(0px, -100vh, 0px)';
    document.querySelector('.sec1').classList.remove('activeImage');
    document.querySelector('.sec2').classList.add('activeImage');
    // viewingPagetwo()
}

function viewingPagetwo (){
    document.querySelector('.slide_container').classList.add('viewing-page-2');    
}