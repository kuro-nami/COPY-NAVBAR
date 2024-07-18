const barsicon = document.getElementById('barsicon')
const crossicon = document.getElementById('crossicon')
const menu = document.getElementById('menu');
const firstcircle = document.getElementById('firstcircle');
const secondcircle = document.getElementById('secondcircle');


barsicon.addEventListener("click", function () {
   barsicon.style.display = "none";
   crossicon.style.display = "flex"; 
});

crossicon.addEventListener("click", function () {
    barsicon.style.display = "flex";
    crossicon.style.display = "none"; 
});


barsicon.addEventListener('click', function() {
    menu.classList.add('menuexpand');
    firstcircle.classList.add('expand');
    secondcircle.classList.add('expand');
  });
  

crossicon.addEventListener('click', function() {
    menu.classList.remove('menuexpand');
    firstcircle.classList.remove('expand');
    secondcircle.classList.remove('expand');
  });
  