'use strict';

const carWrap = document.querySelector('.car-wrap');
const startDrive = document.querySelector('#start-drive');
const resetDrive = document.querySelector('#reset-drive');
const weel1 = document.querySelector('.weel1');
const weel2 = document.querySelector('.weel2');
let driveInterval;
let count = 0;
let driveAnimate = function(){
  driveInterval = requestAnimationFrame(driveAnimate);
  count++;
  if(count < 1000){
    carWrap.style.left = count + 'px';
    weel1.style.transform = 'rotate(' + count*4 + 'deg)';
    weel2.style.transform = 'rotate(' + count*4 + 'deg)';
  }
  else {
    cancelAnimationFrame(driveInterval);
  }
}
let animate = true;
startDrive.addEventListener('click', function(){
  if(animate){
    driveInterval = requestAnimationFrame(driveAnimate);
    animate = false;
  }else{
    animate = true;
    cancelAnimationFrame(driveInterval);
  }
})

resetDrive.addEventListener('click', function(){
  carWrap.style.left = 0;
  weel1.style.transform = 'rotate(0)';
  weel2.style.transform = 'rotate(0)';
  count = 0;
  cancelAnimationFrame(driveInterval);
})


