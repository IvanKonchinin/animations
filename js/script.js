'use strict';
let container = document.querySelector('.container');

function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  
}

DomElement.prototype.createEl = function() {
  
  let elem = document.createElement(this.selector.slice(1));
  let elemText = prompt('Введите содержимое элемента');
  if (this.selector[0] === '.') {
    elem.classList.add(this.selector.replace(/[^a-z\s]+/ig, ""));
  }
  if (this.selector[0] === '#') {
    elem.id = this.selector.replace(/[^a-z\s]+/ig, "");
  }
  elem.style.cssText = `
    height:${this.height};
    width:${this.width};
    background:${this.bg};
    font-size:${this.fontSize};
  `;
  elem.textContent = elemText;
  container.append(elem);
};

let DomElement1 = new DomElement('#div', '20px', '100px', 'red', '14px');

DomElement1.createEl();