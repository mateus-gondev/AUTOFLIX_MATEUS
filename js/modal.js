const perfilImg = document.getElementById('perfil');
const modal = document.getElementById('modal-1');
const linha0 = document.querySelector('.linha0');

function abrirModal() {
    modal.showModal(); 
}

function fecharModal() {
    modal.close();
}


perfilImg.addEventListener('mouseenter', abrirModal);
perfilImg.addEventListener('click', fecharModal);
linha0.addEventListener('click', fecharModal);

document.addEventListener('click', (event) => {
    if (!modal.contains(event.target) && event.target !== perfilImg) {
        modal.close();
    }
});


modal.addEventListener('click', (event) => {
    event.stopPropagation();
});

