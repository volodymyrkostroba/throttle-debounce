const refs = {
    input:document.querySelector('.js-input'),
    output:document.querySelector('.js-output'),
}

refs.input.addEventListener('input', _.debounce(toOutput,700));

function toOutput(e){
refs.output.textContent = e.target.value;
}

