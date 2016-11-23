var item = null;


function init(){
    var targets = document.querySelectorAll('[data-draggable="target"]')
    var items = document.querySelectorAll('[data-draggable="item"]')

    for(var i = 0; i < targets.length; i++) {
        items[i].setAttribute('draggable', 'true');
    }

    addEvents()
}


function addEvents() {
    document.addEventListener('dragstart', function(e) {
        item = e.target;
        // e.dataTransfer.setData('pepe', '');
    }, false)

    document.addEventListener('dragover', function(e) {
        if (item) e.preventDefault()
    }, false )

    document.addEventListener('drop', function(e) {
        if (e.target.getAttribute('data-draggable') === 'target') {
            e.target.appendChild(item)
            e.preventDefault();
        }
    }, false)

    document.addEventListener('dragend', function(e) {
        item = null;
    }, false)
}

init()
