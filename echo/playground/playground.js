const sections = document.querySelectorAll('.ourworks__section');

        const { returnTransforms } = this;

        const section_one_style = window.getComputedStyle(sections[0]);
        const section_two_style = window.getComputedStyle(sections[1]);
        const section_three_style = window.getComputedStyle(sections[2]);
        const section_four_style = window.getComputedStyle(sections[3]);

        const top_position_one = returnTransforms(section_one_style.getPropertyValue('transform'))[5];
        const top_position_two = returnTransforms(section_two_style.getPropertyValue('transform'))[5];
        const top_position_three = returnTransforms(section_three_style.getPropertyValue('transform'))[5];
        const top_position_four = returnTransforms(section_four_style.getPropertyValue('transform'))[5];

        console.log(top_position_one, top_position_two, top_position_three, top_position_four)

        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const viewportHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const maxScroll = documentHeight - viewportHeight;

            const scrollPercentage = (scrollPosition / maxScroll) * 100;

            const translateY1 = (scrollPercentage / 100) * (viewportHeight / 2) * 0.5;
            const translateY2 = (scrollPercentage / 100) * (viewportHeight / 2) * 0.8;
            const translateY3 = (scrollPercentage / 100) * (viewportHeight / 2) * 1.2;
            const translateY4 = (scrollPercentage / 100) * (viewportHeight / 2) * 1.5;

            sections[0].style.transform = `translateY(-${translateY1}px)`;
            sections[1].style.transform = `translateY(-${translateY2}px)`;
            sections[2].style.transform = `translateY(-${translateY3}px)`;
            sections[3].style.transform = `translateY(-${translateY4}px)`;
            
            /*sections[0].style.transform = `translateY(' + translateY1 + 'px)`;
            sections[1].style.transform = `translateY(' + translateY2 + 'px)`;
            sections[2].style.transform = `translateY(' + translateY3 + 'px)`;
            sections[3].style.transform = `translateY(' + translateY4 + 'px)`;*/
        });

        gsap.set(doc, {
            y:268, // Start position
          });
          
          const tl = gsap.timeline();
          
          tl.to(doc, {
            y: -800, // Adjust the desired position
            ease: 'power2.out', // Adjust the easing function
            //duration: 1, 
          });
          
          ScrollTrigger.create({
            trigger: doc,
            start: 'top center', // Adjust the start position
            end: 'bottom center', // Adjust the end position
            animation: tl,
            scrub: true, // Smoothly animates the position while scrolling
          });
          
           /*const sections = document.querySelectorAll('.ourworks__section');
                  const { returnTransforms } = this;
          
                  const section_three_style = window.getComputedStyle(sections[2]);
          
                  const top_position_three = returnTransforms(section_three_style.getPropertyValue('transform'))[5];
          
                  console.log(top_position_three)
          
                  window.addEventListener('scroll', function() {
                      const scrollPosition = window.pageYOffset;
                      const viewportHeight = window.innerHeight;
                      const documentHeight = document.documentElement.scrollHeight;
                      const maxScroll = documentHeight - viewportHeight;
          
                      const scrollPercentage = (scrollPosition / maxScroll) * 100;
                      console.log(scrollPercentage);
                  });*/

                  /*gsap.to(doc, {
                    duration: 1, // Duration of the animation (in seconds)
                    opacity: 0.5, // Target opacity value
                    x: 200, // Target x position
                    scale: 1.2, // Target scale value
                    ease: 'power2.out', // Easing function
                });*/

                const doc_one = document.querySelectorAll('.ourworks__section')[0];
        const doc_two = document.querySelectorAll('.ourworks__section')[1];
        const doc_three = document.querySelectorAll('.ourworks__section')[2];
        const doc_four = document.querySelectorAll('.ourworks__section')[3];

        const tl = gsap.timeline();

        tl.to(doc_one, { duration: 1, y: -500 });
        tl.to(doc_two, { duration: 1, y: 0, ease: 'power2' }, '-=0.5');
        tl.to(doc_three, { duration: 1, y: 0, ease: 'power2' }, '+=0.5');
        tl.to(doc_four, { duration: 1, y: 0, ease: 'power2' }, '+=0.5');