import 'application.css.sass'

const FastClick = require('fastclick');

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

// Scroller
window.addEventListener('scroll', (function(event) {
  var d, e, g, sessionLink, progressBar, targets, w, y;
  w = window;
  d = document;
  e = d.documentElement;
  g = d.getElementsByTagName('body')[0];
  y = w.innerHeight || e.clientHeight || g.clientHeight;
  targets = document.querySelectorAll('.js-scrollable-session');
  sessionLink = document.querySelectorAll('.js-session-link');
  targets.forEach(function(el, index) {
    var progress;
    progress = (el.getBoundingClientRect().top - y) / el.getBoundingClientRect().height;
    progress = progress * -1;
    progress = Math.max(0, progress);
    progressBar = sessionLink[index].querySelector('.nav__bar');
    if (progress > 0.5 && progress < 1.5) {
      sessionLink[index].classList.add('active');
      progressBar.style.width = progress * 1.5 + "em";
    } else {
      sessionLink[index].classList.remove('active');
      progressBar.style.width = "0em";
    }
  });
}), false);

var swiper = new Swiper('.js-main-swiper', {
  loop: true,
  slidesPerView: 1,
  parallax: true,
  longSwipesRatio: 0.05,
  speed: 500,
  nextButton: '.js-slider-next',
  prevButton: '.js-slider-prev',
  onSlideChangeStart: function() {
    if (!swiper) return;
    var sliderStatus = document.querySelector('.js-slider-status')
    sliderStatus.innerText = '0'+(swiper.realIndex+1)
  }
});

// .js-slider-status

var clients = new Swiper('.js-clients', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  loop: true,
  slidesPerView: 1,
  nextButton: '.js-cliente-next',
  prevButton: '.js-cliente-prev'
});
