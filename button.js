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
          toggleButtonA.textContent = "Hide Result";
          toggleButtonA.style.backgroundColor = 'blue'; 
          toggleButtonA.style.color = 'white'; 
      } else {
          toggleButtonA.textContent = "A";
          toggleButtonA.style.backgroundColor = ''; 
          toggleButtonA.style.color = ''; 
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
          toggleButtonB.textContent = "Hide Result";
          toggleButtonB.style.backgroundColor = 'blue';
          toggleButtonB.style.color = 'white';
      } else {
          toggleButtonB.textContent = "B";
          toggleButtonB.style.backgroundColor = '';
          toggleButtonB.style.color = '';
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
          toggleButtonC.textContent = "Hide Result";
          toggleButtonC.style.backgroundColor = 'blue';
          toggleButtonC.style.color = 'white';
      } else {
          toggleButtonC.textContent = "C";
          toggleButtonC.style.backgroundColor = '';
          toggleButtonC.style.color = '';
      }
  });
});

