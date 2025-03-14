
// ====================== Document Object Model ======================
// let tag = document;
// let tag = document.body;
// let tag = document.body.firstChild;
// let tag = document.body.lastChild;
// let tag = document.body.firstElementChild;
// let tag = document.body.lastElementChild;
// console.log(tag);

// const heading = document.getElementById('heading');
// const pre = document.getElementsByClassName('pre');
// const btn = document.getElementsByTagName('button');
// const h1 = document.querySelector('#heading');
// const item = document.querySelectorAll('ul li');
// console.log(item);

// innerText, innerHTML, textContent
// const heading = document.querySelector('#heading');
// heading.innerHTML = '<p>Web Tech</p>';
// heading.innerText = 'Welcome';
// heading.textContent = 'Hello';
// console.log(heading);

// const heading = document.querySelector('#heading');
// heading.style.backgroundColor = 'red';
// heading.style.color = 'yellow';
// heading.style.padding = '10px'

// setAttribute
// const button = document.querySelector('button');
// button.setAttribute('id', 'btn');
// console.log(button);
// button.style.background = 'red';

// getAttribute
// const h1 = document.querySelector('#heading');
// let divElement = document.getElementById("myDiv");
// let print = divElement.getAttribute("class");
// h1.innerHTML = print;

// Create Element
// const myDiv = document.querySelector('#myDiv');
// const elem = document.createElement('p');
// myDiv.appendChild(elem);
// elem.innerText = 'Create Element';

// =============== Event Handeling ===============
// const btn = document.querySelector('button');
// const heading = document.querySelector('#heading');

// function getStart() {
//     console.log('Hello Event');
// }

// btn.addEventListener('click', function(e) {
//     heading.style.color = 'red';
//     console.log(e.clientX);
//     console.log(e.clientY);
// });
