function myFunction() {
    var x = document.getElementById("menu");

    if (x.style.display == "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
}
let ul = document.querySelector('ul');
let li = document.querySelectorAll('.list');
li.forEach(el => {
    el.addEventListener('click', function () {
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});