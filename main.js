let modalBtn = document.querySelector('#modalOpen');

let modalItself = document.querySelector('#modalContainer');

let closeBtn = document.querySelector('#close');


function modalOpen(){
    modalItself.style.display = 'block';
};
function modalClose(){
    modalItself.style.display = 'none';
};

modalBtn.onclick = modalOpen;

closeBtn.onclick = modalClose;

window.onclick = function(event){
    if(event.target == modalItself){
    modalItself.style.display = 'none';
}
}
