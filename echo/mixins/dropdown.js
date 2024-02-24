import gsap from "gsap";

export default {
    data() {
        return {
            dropdownOpen: false
        }
    },
    computed: {
        mobileScreen: function() {
            const x = window.matchMedia("(max-width: 428px)");
            return x.matches;
        }
    },
    methods: {
        toggleDropdown() {
            if (this.dropdownOpen) {
                this.dropdownOpen = false;
            } else if (!this.dropdownOpen) {
                this.dropdownOpen = true;
            }

            if (!this.mobileScreen) {
                this.desktopToggle();
            } else if (this.mobileScreen) {             
                this.mobileToggle();
            }
        },
        desktopToggle() {
            if(this.dropdownOpen) {
                const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2  }});

                tl.to('.dropdown__content', {
                    height: '650px',
                    'padding': '25px 250px',
                    'marginTop': '100px',
                    duration: .1
                });

                tl.to('.dropdown__background', {
                    height: '100%',
                    duration: .8
                });

                tl.to('.dropdown__stroke', { 
                    stagger: .1,
                    height: '100%'
                }, "-=2")

                tl.to('.dropdown__links', {
                    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
                    opacity: 1, 
                    y: 0, 
                    duration: .4
                });

                tl.to('.dropdown__contacts', {
                    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
                    opacity: 1, 
                    y: 0, 
                    duration: .4
                });
            } else if (!this.dropdownOpen) {
                let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2  }});

                tl.to('.dropdown__links', {
                    'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', 
                    opacity: 0, 
                    y: 'translateY(100px)', 
                    duration: .3
                });

                tl.to('.dropdown__contacts', {
                    'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', 
                    opacity: '0', 
                    y: 'translateY(100px)',
                    duration: .3
                });

                tl.to('.dropdown__content', {
                    height: '0',
                    'padding': '0',
                    'marginTop': '0',
                    duration: .1
                });

                tl.to('.dropdown__background', {
                    height: '0',
                    duration: .8
                });

                tl.to('.dropdown__stroke', { 
                    stagger: .1,
                    height: '0'
                }, "-=2")
            }
        },
        mobileToggle() {
            if (this.dropdownOpen) {
                const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: .2  }});

                tl.to('.dropdown__content', {
                    height: '650px',
                    'padding': '25px 25px',
                    'marginTop': '30px',
                    duration: .1
                });

                tl.to('.dropdown__background', {
                    height: '100%',
                    duration: .8
                });

                tl.to('.dropdown__links', {
                    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
                    opacity: 1, 
                    y: 0, 
                    duration: .4
                });

                tl.to('.dropdown__contacts', {
                    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
                    opacity: 1, 
                    y: 'translateY(-160px)', 
                    duration: .4
                });
            } else if (!this.dropdownOpen) {
                const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: .2  }});

                tl.to('.dropdown__links', {
                    'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', 
                    opacity: 0, 
                    y: 'translateY(100px)', 
                    duration: .3
                });

                tl.to('.dropdown__contacts', {
                    'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', 
                    opacity: '0', 
                    y: 'translateY(100px)',
                    duration: .3
                });

                tl.to('.dropdown__content', {
                    height: '0',
                    'padding': '0',
                    'marginTop': '0',
                    duration: .1
                });

                tl.to('.dropdown__background', {
                    height: '0',
                    duration: .8
                });
            }
        }
    }
}