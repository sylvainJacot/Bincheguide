let magnet = document.querySelector(".magnetic");
let maintitle = document.querySelector('.welcome-binche-title');
let orangecircle = window.getComputedStyle(maintitle, '::before');
let strength = 10;

console.log(orangecircle);

  magnet.addEventListener("mousemove", moveMagnet);
  magnet.addEventListener("mouseout", function (event) {
    TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
  });


function moveMagnet(event) {
  let magnetButton = event.currentTarget;
  let bounding = magnetButton.getBoundingClientRect();


  TweenMax.to(magnetButton, 1, {
    x:
      ((event.clientX - bounding.right) / magnetButton.offsetWidth - 0.5) *
      strength,
    y:
      ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
      strength,
    ease: Power4.easeOut
  });
}

