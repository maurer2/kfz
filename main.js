// node node_modules/browserify/bin/cmd.js main.js > bundle.js

const app = require('./app');
const input = document.querySelector('#lp');
const output = document.querySelector('#lp-result');

input.addEventListener('change', (event) => {
    event.preventDefault();

    output.value = event.target.value;
});