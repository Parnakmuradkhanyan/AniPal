document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.likes-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const likeAmount = this.nextElementSibling;

            if (!this.classList.contains('active')) {
                this.classList.add('active');
                likeAmount.textContent = parseInt(likeAmount.textContent) + 1;
            } else {
                this.classList.remove('active');
                likeAmount.textContent = parseInt(likeAmount.textContent) - 1;
            }
        });
    });
});
