import gsap from 'gsap';

// Animation de la card ItemCountry
const fadeInCard = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.3 }
    );
};

// Animation du text continent
const fadeInRegion = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.4 }
    );
};

// Animation du nom du pays
const fadeInTitle = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
};

// Animation du texte "langues parlées"
const fadeInSubtitle = (element) => {
    gsap.fromTo(
        element,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.6 }
    );
};

// Animation de la liste de langues
const fadeInLanguages = (element) => {
    gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1 }
    );
};

export { fadeInCard, fadeInRegion, fadeInTitle, fadeInSubtitle, fadeInLanguages };