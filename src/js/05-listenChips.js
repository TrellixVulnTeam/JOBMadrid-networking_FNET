// listen chips

function handleChip(ev) {
  console.log(ev.currentTarget.id);
}

function listenChips() {
  const listChips = document.querySelectorAll('.js_chips_companies');

  listChips.forEach((chipEl) => {
    chipEl.addEventListener('click', handleChip);
  });
}
