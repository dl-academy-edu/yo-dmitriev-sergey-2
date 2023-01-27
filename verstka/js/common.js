const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".js_btn");
const closeBtn = document.querySelector(".exit");
const firstInput = popup.querySelector(".text1");

openBtn.addEventListener('click', function() {
    popup.classList.add('open');
    firstInput.focus();
});

closeBtn.addEventListener('click', function() {
    popup.classList.remove('open');
    fading.classList.remove('open');
});

window.addEventListener("keydown", function(e) {
    if (e.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
    };
})