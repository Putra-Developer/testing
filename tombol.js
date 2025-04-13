const tombol = document.querySelector('.tombol');
const nav = document.querySelector('nav ul');
const hiden = document.getElementById('hiden');
const header = document.getElementById('kepala');

tombol.addEventListener('click', function (){
    nav.classList.toggle('slide');
    hiden.classList.toggle('hiden');
})

tombol.addEventListener('click', function(){
    header.classList.toggle('hilang')
});
