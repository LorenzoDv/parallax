const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
    let x = e.pageX
    let y = e.pageY

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";


})

document.addEventListener('mousemove', parallax)
function parallax(e) {
    document.querySelectorAll('.para').forEach(function (move) {
        let moving = move.getAttribute("data-value");
        let x = (e.clientX * moving) / 100;
        let y = (e.clientY * moving) / 100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
    })
}




