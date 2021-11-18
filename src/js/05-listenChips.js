// listen chips

function handleChip(ev) {
  const chipSelectId = ev.currentTarget.id;
 
  // if there is a select repeat
  const chipFound = chipsFilter.findIndex(chip => {
    return chip === chipSelectId;
  })
  // add select for filter
  if (chipFound === -1) {
    chipsFilter.push(chipSelectId)
  } else {
    chipsFilter.splice(chipFound, 1)
  }


  // chipsCompanies.classList.toggle('card__chips--select');


  console.log(chipsFilter);
}

function listenChips() {
  const listChips = document.querySelectorAll('.js_chips_companies');

  listChips.forEach((chipEl) => {
    chipEl.addEventListener('click', handleChip);
  });
}
