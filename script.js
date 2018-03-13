const input = document.querySelector('#lp');
const output = document.querySelector('#lp-result');

input.addEventListener('change', (event) => {
    event.preventDefault();

    output.value = event.target.value;
});