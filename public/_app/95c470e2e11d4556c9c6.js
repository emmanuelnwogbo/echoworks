const url = `http://localhost:3000`;

const xhrem = new XMLHttpRequest();

const titlesElems = document.querySelectorAll('.page-title');
console.log(titlesElems);

titlesElems.forEach(function(element) {
    element.addEventListener('click', function() {
        //const embedhtml = document.getElementById('embed-html');

        if (this.innerText === 'MONEY PIGEON') {
            navigateTo(`/moneypigeon`);
        }

        if (this.innerText === 'ORAIMO OPEN AUDIO') {
            navigateTo(`/oraimo`);
        }

        if (this.innerText === 'ORAIMO WAYE') {
            navigateTo(`/oraimowaye`);
        }

        if (this.innerText === 'PERNOD RICARD') {
            navigateTo(`/pernodricard`);
        }
      });     
});

function navigateTo(url) {
    window.location.href = url;
}

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
                <a href="${url}">How We Think</a>
            </span>
            <span>
                <a href="${url}">Competencies</a>
            </span>
            <span>
                <a href="${url}">Who We Are</a>
            </span>
            <span>
                <a>Our Works</a>
            </span>
            <span>
                <a href="https://billboards.echoafrica.co/">Billboards</a>
            </span>
            <span>
                <a href="${url}">Say Hello</a>
            </span>
        </div>
    </div>
`;

document.body.insertAdjacentHTML("beforeend", header);