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

const url = `http://localhost:3000`;

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

const header = `
    <div class="embedheader" id="embedheader">
        <div class="embedheader__left">
            <a href="${url}">
                <figure class="embedheader__logo">
                    <img src="https://rebel-sam.s3.eu-west-2.amazonaws.com/logo.svg"/>
                </figure>
            </a>
        </div>
        <div class="embedheader__right">
            <span>
                <a href="https://example.com">How We Think</a>
            </span>
            <span>
                <a>Competencies</a>
            </span>
            <span>
                <a>Who We Are</a>
            </span>
            <span>
                <a>Our Works</a>
            </span>
            <span>
                <a>Billboards</a>
            </span>
            <span>
                <a>Say Hello</a>
            </span>
        </div>
        <div class="embedheader__burger" id="embedheader__burger">
            <span></span>
            <span></span>
        </div>

        <div class="embedheader__mobilemenu notvisible" id="embedheader__mobilemenu">
            <div class="embedheader__mobileitems">
                <span>
                    <a href="${url}">How We Think</a>
                </span>
                <span>
                    <a href="${url}">Competencies</a>
                </span>
                <span>
                    <a href="${url}/#whowearemobile__copy">Who We Are</a>
                </span>
                <span>
                    <a href="${url}">Our Works</a>
                </span>
                <span>
                    <a href="https://billboards.echoafrica.co/">Billboards</a>
                </span>
                <span>
                    <a href="${url}">Say Hello</a>
                </span>
            </div>
            <div class="embedheader__mobilebottom">
                <div class="embedheader__mobilebottomlink">
                    <span>Phone</span>
                    <span>03-5829-6856</span>
                </div>
                <div class="embedheader__mobilebottomlink">
                    <span>Enquiries</span>
                    <span>hello@echo.co</span>
                </div>
            </div>
        </div>
    </div>
`;

document.body.insertAdjacentHTML("beforeend", header);

const burger = document.getElementById('embedheader__burger');

burger.addEventListener('click', () => {
    const mobileMenu = document.getElementById('embedheader__mobilemenu');
    const mobileMenuClasses = mobileMenu.classList;
    
    if (mobileMenuClasses.contains('notvisible')) {
        mobileMenu.classList.remove('notvisible');
        mobileMenu.classList.add('visible')
    } else {
        mobileMenu.classList.add('notvisible');
        mobileMenu.classList.remove('visible')
    }
});

function seemoreClick(route) {
    navigateTo(`/${route}`);
}

function navigateTo(url) {
    window.location.href = url;
}
  