/*function iniciar(){
    var imagenes=document.querySelectorAll('#cajaimagenes > img');
    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }
    drop1=document.getElementById('canvas1');
    drop2=document.getElementById('canvas2');
    drop3=document.getElementById('canvas3');
    drop4=document.getElementById('canvas4');
    drop5=document.getElementById('canvas5');
    drop6=document.getElementById('canvas6');
    lienzo=drop1.getContext('2d');
    drop1.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    drop1.addEventListener('dragover', function(e){
        e.preventDefault(); }, false);
    drop1.addEventListener('drop', soltado, false);

}
function finalizado(e){
    elemento=e.target;
    elemento.style.visibility='hidden';
}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target, 0, 0);
}
function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    var elemento=document.getElementById(id);
    var posx=e.pageX-drop1.offsetLeft;
    var posy=e.pageY-drop1.offsetTop;
    lienzo.drawImage(elemento,posx,posy);
}
window.addEventListener('load', iniciar, false);*/

function init(){
    var images = document.querySelectorAll('#cajaimagenes > img')
    for (var i = 0;i<images.length; i++){
        images[i].setAttribute('draggable', 'true');
        images[i].setAttribute('aria-grabbed', 'false');
        images[i].setAttribute('tabindex', '0');
        images[i].addEventListener('dragstart', dragged, false);
        images[i].addEventListener('dragend', finished, false);
    }

    for(var targets = document.querySelectorAll('[data-draggable="target"]'),len = targets.length, i = 0; i < len; i ++) {
        targets[i].setAttribute('aria-dropeffect', 'none');
    }

    var drop1=document.getElementById('canvas1');
    var drop2=document.getElementById('canvas2');
    var drop3=document.getElementById('canvas3');
    var drop4=document.getElementById('canvas4');
    var drop5=document.getElementById('canvas5');
    var drop6=document.getElementById('canvas6');
}

function dragged(e){
    var element = e.target;
    e.dataTransfer.setData('Text', element.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target, 0, 0);
}

function dropped(e){
    e.preventDefault()
    var id = e.dataTransfer.getData('Text')
    var element = document.getElementById(id)

}

function finished(e){
    var element = e.target
    element.style.visibility ='hidden'
}
