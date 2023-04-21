if (window.screen.width >= 768) {
    const xhrem = new XMLHttpRequest();

    const titlesElems = document.querySelectorAll('.page-title');
    console.log(titlesElems);

    titlesElems.forEach(function(element) {
        element.addEventListener('click', function() {
            const embedhtml = document.getElementById('embed-html');
            console.log(this)
            //embedhtml.style.display = 'block';

            navigateTo('http://localhost:8080/brand');
        });     
    });

    function navigateTo(url) {
        // Change the URL of the current page
        window.location.href = url;
      }
  

    /*xhrem.onreadystatechange = function() {
        if (xhrem.readyState === 4 && xhrem.status === 200) {
            const htmlContent = xhrem.responseText;
            const pageContent = document.querySelector('.page-content');

            pageContent.insertAdjacentHTML('beforebegin', htmlContent);
            console.log('ready', htmlContent, pageContent);
        }
    }

    xhrem.open('GET', '../html/work.html', true);
    xhrem.send();*/
  }
