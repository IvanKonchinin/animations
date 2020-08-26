'use strict';

function DomElement(selector, height, width, bg, fontSize, position){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
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
    position:${this.position};
  `;
  elem.textContent = elemText;

  document.addEventListener('DOMContentLoaded', function () {
    document.body.append(elem);
  });
  
  document.addEventListener('keydown', function (e) {
    let computedStyleRight = +getComputedStyle(elem).right.replace(/[^0-9\s]+/ig, "");
    let computedStyleTop = +getComputedStyle(elem).top.replace(/[^0-9\s]+/ig, "");
    
    if(e.code === 'ArrowLeft'){
      elem.style.right = (computedStyleRight + 10) + 'px';
      console.log(elem.style.right);
    }
    if (e.code === 'ArrowRight') {
      elem.style.right = (computedStyleRight - 10) + 'px';
    }
    if (e.code === 'ArrowUp') {
      elem.style.top = (computedStyleTop - 10) + 'px';
    }
    if (e.code === 'ArrowDown') {
      elem.style.top = (computedStyleTop + 10) + 'px';
    }
  }.bind(this));
};


let DomElement1 = new DomElement('.div', '100px', '100px', 'red', '14px', 'absolute');
DomElement1.createEl();


