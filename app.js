//const articles = document.querySelectorAll('.container');
//const select = document.querySelector('select');

//function updateDisplay() {
//  articles.forEach((article) => {
//     article.style.display = select.value;
//});

//}
//select.addEventListener('click', updateDisplay);

//updateDisplay();
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
})