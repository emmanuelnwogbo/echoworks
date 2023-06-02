/*console.log('hello from mobvile')

if (window.screen.width < 768) {
    console.log('hello mobile')
    const xhremM = new XMLHttpRequest();

    const titlesElemsM = document.querySelectorAll('.page-title');
    console.log(titlesElemsM);

    titlesElemsM.forEach(function(element) {
        element.addEventListener('click', function() {
            const embedhtmlM = document.getElementById('embed-html');
            console.log(this)
            embedhtmlM.style.display = 'block';
        });     
    });
  

    xhremM.onreadystatechange = function() {
        if (xhremM.readyState === 4 && xhremM.status === 200) {
            const htmlContentM = xhremM.responseText;
            const pageContentM = document.querySelector('.page-content');

            pageContentM.insertAdjacentHTML('beforeend', htmlContentM);
            console.log('ready', htmlContentM, pageContentM)
        }
    }

    xhremM.open('GET', '../html/work.html', true);
    xhremM.send();
  }*/

let current_slide = 0;
const slideredu = document.getElementById('slideredu');
const slideincre = document.getElementById('slideincre');

const brandcontainer__slidenav = document.querySelector('.brandcontainer__slidenav');
const children = brandcontainer__slidenav.children;
const brandcontainer__slidewrapper = document.querySelector('.brandcontainer__slidewrapper');
const childrenImgs = brandcontainer__slidewrapper.children;

children[current_slide].style.opacity = '1';
childrenImgs[current_slide].style.opacity = '1';

slideredu.addEventListener('click', function(event) {
    current_slide != 0 ? current_slide -=1 : current_slide = 0;

    childrenImgs[current_slide].style.opacity = '1';
    childrenImgs[current_slide+1].style.opacity = '0';

    children[current_slide].style.opacity = '1';
    children[current_slide+1].style.opacity = '.5';
});

slideincre.addEventListener('click', function(event) {
    current_slide != 2 ? current_slide +=1 : current_slide = 2;
    childrenImgs[current_slide].style.opacity = '1';
    childrenImgs[current_slide-1].style.opacity = '0';

    children[current_slide].style.opacity = '1';
    children[current_slide-1].style.opacity = '.5';
});

const mobileSwipe = document.querySelector('.brandcontainer__mobileswipe');
let startX;
let scrollLeft;

mobileSwipe.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    scrollLeft = mobileSwipe.scrollLeft;
});

mobileSwipe.addEventListener('touchmove', (e) => {
  if (!startX) return;

  e.preventDefault();

  const x = e.touches[0].clientX;
  const walk = (x - startX) * 2; // Adjust the sensitivity of the swipe

  mobileSwipe.scrollLeft = scrollLeft - walk;
});

mobileSwipe.addEventListener('touchend', () => {
  startX = null;
});
  