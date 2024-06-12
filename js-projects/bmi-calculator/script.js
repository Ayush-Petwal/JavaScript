const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    
    const res = document.querySelector('#results');

    res.innerHTML = (weight / ((height * height) / 10000)).toFixed(2);
});  