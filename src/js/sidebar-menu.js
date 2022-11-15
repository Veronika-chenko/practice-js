const refs = {
    nav: document.querySelector('[data-nav]'),
    menuToggle: document.querySelector('[data-menu-toggle]'),
    menuItems: document.querySelectorAll('[data-menu-item]')
}

refs.menuToggle.addEventListener('click', handleToggle);
refs.menuItems.forEach(item => item.addEventListener('click', toggleCurrentItem))

function handleToggle() {
    refs.nav.classList.toggle('active');
}

function toggleCurrentItem() {
    refs.menuItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}
