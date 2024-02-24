document.addEventListener('DOMContentLoaded', () => {

  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2  }});

  tl.to('.jumbotron__copy--line', {
    stagger: .3,
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
    opacity: 1,  
    duration: 1
  });

  gsap.to('.jumbotron__scolltext', {
    x: '-530%',
    ease: 'power4.inOut',
    duration: 14,
    scrollTrigger: {
      trigger: '.jumbotron__scolltext',
      start: '-=800', // Offset of 200 pixels from the original position
      end: '+=1000', //
      scrub: true
    }
  });  
})