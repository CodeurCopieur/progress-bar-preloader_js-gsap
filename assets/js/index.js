window.addEventListener('load', move)

const tl = gsap.timeline({
  paused: "true"
});

tl.to('#percent, #bar', {
  duration: .2,
  opacity: 0,
  zIndex: -1
});
tl.to('#preloader', {
  duration: .8,
  width: "0%"
});
tl.from('.container', {
  duration: 1.5,
  y: "-150%"
}, "-=.2");
tl.to('.container h1', {
  opacity: 1,
  y: "10%",
  stagger: {
    amount: .4
  }
});

var width = 1;
var bar = document.getElementById('barConfirm');
var id;

function move() {
  id = setInterval(frame, 10);
}

function frame() {
  if(width >= 100) {

    clearInterval(id);
    tl.play();

  } else {
    width++;
    bar.style.width = width +"%";
    document.getElementById('percent').innerHTML = width +"%";
  }
}