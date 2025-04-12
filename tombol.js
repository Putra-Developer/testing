const tombol = document.querySelector('.tombol');
const nav = document.querySelector('nav ul');
const hiden = document.getElementById('hiden');


tombol.addEventListener('click', function (){
    nav.classList.toggle('slide');
    hiden.classList.toggle('hiden');
})
