gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

//canvas.width = 1158;
//canvas.height = 770;

//canvas.width = 1158;
//canvas.height = 770;

const frameCount = 147;
const currentFrame = index => {
  console.log(`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`); 
  
  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`;
};


const images = []
const airpods = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  console.log(i, 'current frame function')
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0); 
}


if (this.dropdownOpen) {
  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2  }});

  tl.to('.dropdown__background', {
      height: '100%',
      duration: 1
  });

  tl.to('.dropdown__stroke', { 
      stagger: .1,
      height: '100%'
  }, "-=2")

  tl.to('.dropdown__body', {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
      opacity: 1, 
      duration: .7
  });

  tl.to('.dropdown__links', {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
      opacity: 1, 
      y: 0, 
      duration: 1
  });

  tl.to('.dropdown__contact', {
      stagger: 1,
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
      opacity: 1, 
      y: 0, 
      duration: 1.1
  });
}