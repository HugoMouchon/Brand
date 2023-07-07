import gsap from 'gsap';

// Animation du bouton Maps du bas vers le haut avec fondu
const fadeBottomButton = (element) => {
    gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1.1 }
    );
};

export { fadeBottomButton };