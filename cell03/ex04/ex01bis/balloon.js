$(document).ready(function() {
    const $balloon = $('#balloon');
    const colors = ['red', 'green', 'blue'];
    let size = 200;
    let colorIndex = 0;

    function clickBalloon() {
        size += 10;
        if (size > 420) {
            size = 200;
        }
        $balloon.css({
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[colorIndex]
        });
        colorIndex = (colorIndex + 1) % colors.length;
    }

    function mouseLeave() {
        size -= 5;
        if (size < 200) {
            size = 200;
        }
        $balloon.css({
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[colorIndex]
        });
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }

    $balloon.on('click', clickBalloon);
    $balloon.on('mouseleave', mouseLeave);
});