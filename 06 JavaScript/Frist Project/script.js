let count = document.querySelector('#count');
const incre = document.querySelector('#incre');
const decre = document.querySelector('#decre');

let value = 0;

incre.addEventListener('click', ()=>{
    count.innerHTML = value++;
});

decre.addEventListener('click', ()=> {
    count.innerHTML = value--;
});
