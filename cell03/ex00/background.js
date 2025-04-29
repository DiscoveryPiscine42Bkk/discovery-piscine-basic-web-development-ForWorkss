const button = document.getElementById("button_colorchanger");

function change_color () {
    document.body.style.backgroundColor = getRandoCol();
}

function getRandoCol() {
    let letters = "0123456789ABCDEF";
    let col = "#"
    for (let i=0; i < 6; i++) {
        col += letters[Math.floor(Math.random() * 16)];
    }
    console.log(col);
    return col;
}

button.addEventListener('click', () => {
    change_color();
});