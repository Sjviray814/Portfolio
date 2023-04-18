var i = 0;
var txt = 'Stephen Viray.'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function beginningAnimation() {
  if (i < txt.length) {
    document.getElementById("stephen").innerHTML += txt.charAt(i);
    i++;
    setTimeout(beginningAnimation, speed);
  }
  else {
    document.getElementById("hello").classList.toggle('fadein');
    document.getElementById("description").classList.toggle('fadein');

  }
}



window.onload = function() {
  beginningAnimation();

}

var cards = document.querySelectorAll('.card');

[...cards].forEach((card) => {
  card.addEventListener('click', function() {
    card.classList.toggle('active');
  });
});




// Code copy pasted from codepen for the hamburger menu:
$(document).ready(function() {
  $('#nav-icon3').click(function() {
    $(this).toggleClass('open');
    document.getElementById("links").classList.contains('hidden') ? document.getElementById("links").classList.replace('hidden', 'grid') : document.getElementById("links").classList.replace('grid', 'hidden');
  });
});



// Code copied from fireship video, does animations when elements load onto screen: https://www.youtube.com/watch?v=T33NN_pPeNI

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    // Uncomment this to make animations play forever
    // else{
    //   entry.target.classList.remove('show');
    // }
  })
})

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));