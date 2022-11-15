const refs = {
    container: document.querySelector('.btn-container'),
}


refs.container.addEventListener("mouseover", hoverHandler);

function hoverHandler(evt) {
    const { target: button } = evt;

    button.style.top = `${Math.floor(
        Math.random() * (window.innerHeight - button.clientHeight)
    )}px`;
    button.style.left = `${Math.floor(
        Math.random() * (window.innerWidth - button.clientWidth)
    )}px`; 
}
