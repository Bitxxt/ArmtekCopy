function changeIcon(arg) {
    event.stopPropagation()
    if (arg.innerHTML == '<i class="bi bi-heart"></i>') {
        arg.innerHTML = '<i class="bi bi-heart-fill" style="color: var(--main-accent-color)"></i>'
    }
    else {
        arg.innerHTML = '<i class="bi bi-heart"></i>'
    }
}