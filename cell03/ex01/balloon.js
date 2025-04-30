const balloon = document.getElementById('balloon');
const colors = ['red','green','blue'];
let size = 200;
let colorIndex = 0;

function ClickBallooon() {
    size += 10;
    if (size > 420) {
        size = 200;
    }
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

function Mleave() {
    size -= 5;
    if (size < 200) {
        size = 200;
    }
    balloon.style.height = `${size}px`;
    balloon.style.width = `${size}px`;
    balloon.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
}

balloon.addEventListener('click', () => {
    ClickBallooon();
})
balloon.addEventListener('mouseleave', ()=> {
    Mleave();
})


