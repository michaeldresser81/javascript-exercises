let container = document.querySelector('#container');
let para = document.createElement('p');
let blueHeader = document.createElement('h3');
let newDiv = document.createElement('div');
    newDiv.style.border = '2px solid black';
    newDiv.style.backgroundColor = 'pink';
let header1 = document.createElement('h1');
        header1.textContent = "I'm a div";

let para2 = document.createElement('p');
    para2.textContent = "ME TOO!";

newDiv.appendChild(header1);
newDiv.appendChild(para2);

para.style.color = 'red';
para.textContent = 'Hey, I\'m red';
blueHeader.style.cssText = 'color: blue';
blueHeader.textContent = "I'm a blue h3";
container.appendChild(para);
container.appendChild(blueHeader);
container.appendChild(newDiv);