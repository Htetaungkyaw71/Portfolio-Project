const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');
const upper = document.querySelector('.upper');

function close() {
  openMenu.style.display = 'block';
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
  upper.classList.remove('blur');
}

function open() {
  openMenu.style.display = 'none';
  overlay.style.display = 'block';
  document.body.style.position = 'fixed';
  upper.classList.add('blur');
}

openMenu.onclick = () => {
  open();
};

closeMenu.onclick = () => {
  close();
};

document.querySelectorAll('#overlay_link').forEach((btn) => {
  btn.onclick = () => {
    close();
  };
});
