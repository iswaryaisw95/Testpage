gsap.registerPlugin(ScrollTrigger);

// Initial text animation

gsap.from(".text", {
    opacity: 1,
    ease: "power2.inOut"
});

gsap.to(".text", {
    scrollTrigger: {
        trigger: ".text",
        start: "top 30%",
        end: "bottom 10%",
        pin: true,
        scrub: true,
        toggleClass: "active",
        toggleActions: "play none none reverse"
    },
    scale: 1,
    opacity: 0,
    ease: "power2.inOut"
});

gsap.to(".text1", {
    scrollTrigger: {
        trigger: ".text1",
        start: "top 10%",
        end: "bottom 35%",
        pin: true,
        scrub: true,
        toggleClass: "active",
        toggleActions: "play none none reverse"
    },  
    opacity: 0,
    ease: "power2.inOut"
});

// gsap.from(".text1", {
//     scrollTrigger: {
//         trigger: ".text1",
        
//         onEnter: () => {
//             gsap.to(".text1", {
//                 opacity: 1,
//                 pin: true,
//                 duration: 1,
//                 scrub: true,
//                 ease: "power2.in"
//             });
//         },
//         onLeave: () => {
//             gsap.to(".text1", {
//                 opacity: 0,
//                 duration: 1,
//                 ease: "power2.inOut" 
//             });
//         }
//     },
//     opacity: 0,
//     ease: "power2.inOut"
// });

// const horizontalScroll = gsap.utils.toArray("#horizontal-scroll .horizontal-scroll-item img");

// gsap.to(horizontalScroll, {
//     xPercent: -100 * (horizontalScroll.length - 1),
//     scrollTrigger: {
//         trigger: "#horizontal-scroll",
//         pin: true,
//         scrub: true,
//         markers: false
//     }
// });




    // ------------------

    // Create scroll progress bar
    const progressBar = document.createElement('div');
    const progressBarContainer = document.createElement('div');

    // Style for the container
    progressBarContainer.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background: rgba(255, 255, 255, 0.1);
        z-index: 9999;
    `;

    // Style for the progress bar
    progressBar.style.cssText = `
        height: 100%;
        width: 0%;
        background: rgb(225, 41, 85);
        transition: width 0.05s ease-out;
    `;

    // Append elements
    progressBarContainer.appendChild(progressBar);
    document.body.appendChild(progressBarContainer);

    // Update progress bar on scroll
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });

    // Optional: Add GSAP animation to make it smoother
    gsap.to(progressBar, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3
        }
    });
