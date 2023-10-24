// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtonA = document.getElementById('A');
    const imageA = document.getElementById('imageA');
    let isImageVisibleA = false;
    imageA.style.display = 'none';
    toggleButtonA.addEventListener('click', function() {
      if (isImageVisibleA) {
        imageA.style.display = 'none';
      } else {
        imageA.style.display = 'block';
      }
      isImageVisibleA = !isImageVisibleA;
    });
      toggleButtonA.addEventListener('click', function(){
      if (toggleButtonA.textContent === "A") {
        toggleButtonA.textContent = "Hide";
      } else {
        toggleButtonA.textContent = "A";
      }
    });
    const toggleButtonB = document.getElementById('B');
    const imageB = document.getElementById('imageB');
    let isImageVisibleB = false;
     imageB.style.display = 'none';
    toggleButtonB.addEventListener('click', function() {
      if (isImageVisibleB) {
        imageB.style.display = 'none';
      } else {
        imageB.style.display = 'block';
      }
      isImageVisibleB = !isImageVisibleB;
    });
  toggleButtonB.addEventListener('click', function(){
      if (toggleButtonB.textContent === "B") {
        toggleButtonB.textContent = "Hide";
      } else {
        toggleButtonB.textContent = "B";
      }
    });
  
    const toggleButtonC = document.getElementById('C');
    const imageC = document.getElementById('imageC');
    let isImageVisibleC = false;
     imageC.style.display = 'none';
    toggleButtonC.addEventListener('click', function() {
      if (isImageVisibleC) {
        imageC.style.display = 'none';
      } else {
        imageC.style.display = 'block';
      }
      isImageVisibleC = !isImageVisibleC;
    });
  toggleButtonC.addEventListener('click', function(){
      if (toggleButtonC.textContent === "C") {
        toggleButtonC.textContent = "Hide";
      } else {
        toggleButtonC.textContent = "C";
      }
    });	
      
  });