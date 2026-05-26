document.addEventListener("DOMContentLoaded", () => {
    // Progressive-Enhancement Guard for Anime.js
    const motionReady = typeof anime !== 'undefined';

    // ==================== TASTEFUL ANIMATION LAYER ====================
    if (motionReady) {
        const introTimeline = anime.timeline({
            easing: 'easeOutQuad'
        });

        // 1. Branding Reveal
        introTimeline.add({
            targets: '.logo-wrapper, .subtitle',
            opacity: [0, 1],
            translateY: [15, 0],
            duration: 800,
            delay: anime.stagger(150)
        })
        // 2. Action Targets
        .add({
            targets: '.tagline, .terminal-install-container, .cta-wrapper',
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 600,
            delay: anime.stagger(100)
        }, '-=400');

        // 3. Stagger feature grid entries on scroll
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const matrixObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.matrix-card',
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 600,
                        easing: 'easeOutCubic',
                        delay: anime.stagger(80)
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const gridTarget = document.querySelector('.matrix-grid');
        if (gridTarget) matrixObserver.observe(gridTarget);
    }

    // ==================== CLICK COPY MICRO-INTERACTION ====================
    const copyTrigger = document.getElementById('copy-trigger');
    const copyCommand = document.getElementById('install-command');

    if (copyTrigger && copyCommand) {
        copyTrigger.addEventListener('click', () => {
            const textToCopy = copyCommand.textContent;

            navigator.clipboard.writeText(textToCopy).then(() => {
                const textNode = copyTrigger.querySelector('.copy-text');
                
                if (textNode) textNode.textContent = "COPIED!";
                copyTrigger.style.borderColor = "var(--green-accent)";
                copyTrigger.style.color = "var(--green-accent)";

                if (motionReady) {
                    anime({
                        targets: copyTrigger,
                        scale: [1, 1.05, 1],
                        duration: 300,
                        easing: 'easeInOutQuad'
                    });
                }

                setTimeout(() => {
                    if (textNode) textNode.textContent = "COPY";
                    copyTrigger.style.borderColor = "";
                    copyTrigger.style.color = "";
                }, 2000);
            }).catch(err => {
                console.error('[!] Copy event rejected: ', err);
            });
        });
    }
});