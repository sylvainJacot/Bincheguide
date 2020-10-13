let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links ul');
let logo = document.getElementById('binchelogo');

window.addEventListener("mousemove", cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
};

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
  });
});

logo.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove('link-grow');
});
logo.addEventListener('mouseover', () => {
  mouseCursor.classList.add('link-grow');
});


document.addEventListener('click', () => {
  mouseCursor.classList.add('clickexpand');
  setTimeout(() => {
    mouseCursor.classList.remove('clickexpand')
  }, 300)
})

