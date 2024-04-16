document.addEventListener('DOMContentLoaded', function () {
    function createCounter(id, targetNumber) {
        const counterElement = document.getElementById(id);
        let count = 0;

        function updateCounter() {
            counterElement.innerText = count;
            if (count < targetNumber) {
                count++;
                requestAnimationFrame(updateCounter);
            } else {
                // Trigger confetti explosion
                explodeConfetti(counterElement);
            }
        }

        updateCounter();
    }

    function explodeConfetti(container) {
        particlesJS(container.id, {
            particles: {
                number: { value: 200 },
                size: { value: 3 },
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                },
            },
        });
    }

    createCounter('counter1', 100); // Set your target number for counter1
    createCounter('counter2', 150); // Set your target number for counter2
    createCounter('counter3', 200); // Set your target number for counter3
});
