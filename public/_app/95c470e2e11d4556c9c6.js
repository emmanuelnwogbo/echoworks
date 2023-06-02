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
