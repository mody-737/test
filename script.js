new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 768,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });

var light = document.getElementsByClassName('lightbox') [0];
var conten1 = document.getElementsByClassName('pp1') [0];
var conten2 = document.getElementsByClassName('pp2') [0];
var conten3 = document.getElementsByClassName('pp3') [0];
var video1 = document.getElementById('videopp1');
var video2 = document.getElementById('videopp2');
var video3 = document.getElementById('videopp3');

function vid1() {
    light.style.display="flex";
    conten1.style.display="block";
    video1.src='https://player.vimeo.com/video/530959716?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=';
}

function vid2() {
    light.style.display="flex";
    conten2.style.display="block";
    video2.src='https://player.vimeo.com/video/530959906?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=';
}

function vid3() {
    light.style.display="flex";
    conten3.style.display="block";
    video3.src='https://player.vimeo.com/video/530960111?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=';
}

function fech() {
    light.style.display="none";
    conten1.style.display="none";
    conten2.style.display="none";
    conten3.style.display="none";
    video1.src='';
    video2.src='';
    video3.src='';
}