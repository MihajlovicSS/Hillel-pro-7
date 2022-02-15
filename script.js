const listArr = [
    {
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    }
]

function addElement(tag, classTag, text){
    let newElement = document.createElement(tag);
    newElement.classList.add(classTag);
    newElement.textContent = text;
    return newElement;
}
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    console.log(r);
    let g = Math.floor(Math.random() * 255);
    console.log(g);
    let b = Math.floor(Math.random() * 255);
    console.log(b);
    console.log('#' + hex(r) + hex(g) + hex(b));
    return '#' + hex(r) + hex(g) + hex(b);
}
function hex(number){
    return number < 16 ? '0'+ number.toString(16) : number.toString(16);
}

let wrapper = document.querySelector('.wrapper');
wrapper.appendChild(addElement('ul', 'list'));
let list = wrapper.querySelector('.list');

for (let i = 0; i < listArr.length; i++){
    let newElem = addElement('li', 'list-item');
    let itemTitle = addElement('h2', 'item-title', listArr[i].title);    
    let itemDescription = addElement('p', 'item-description', listArr[i].text);
    list.appendChild(newElem);
    newElem.style.backgroundColor = randomColor();
    newElem.appendChild(itemTitle);
    newElem.appendChild(itemDescription);
}

/*Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li  (то есть создать еще 2 элемента для свойства title и ы свойства text). Поместить все созданные li внутри этой ul, затем вставьте эту ul в конец body.

Дополнительно сделать функцию которая будет возвращать рандомный цвет, и для каждого li применить этот рандомный цвет текста. (Это все сделать с помощью js)*/