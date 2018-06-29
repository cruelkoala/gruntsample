const btn = document.querySelector('#generate-button');
const input = document.querySelector('#word-input');
const field = document.querySelector('#field');
btn.addEventListener('click', function () {
    field.innerHTML = "";
    let word = input.value;
    let letters = word.trim().split('');
    letters.forEach(element => {
        let span = document.createElement('span');
        let className = element === ' ' ? 'space' : 'letter'
        span.classList.add(className);
        span.classList.add('closed');
        span.innerText = element;
        field.appendChild(span);
    });
});

field.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        return
    }
    e.target.classList.remove('closed');
})