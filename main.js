document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.getElementById('horizontal-wrapper');

    document.querySelectorAll('.next-button').forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.offsetLeft;
            scrollContainer.scrollTo({
                left: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});