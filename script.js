
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const contentWrapper = question.querySelector('.content-wrapper');
        const icon = question.querySelector('button i');

        contentWrapper.classList.toggle('active');
        

        if (icon.classList.contains('fa-square-plus')) {
            icon.classList.replace('fa-square-plus', 'fa-square-minus');
        } else {
            icon.classList.replace('fa-square-minus', 'fa-square-plus');
        }
    })
})