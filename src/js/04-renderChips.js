// render chips

function industries() {
  const allIndustries = dataCompanies.map((aData) => aData.industry);

  const filterIndustries = allIndustries.filter((value, index) => {
    return allIndustries.indexOf(value) === index;
  });

  return filterIndustries;
}

function renderChips() {
  const arrayIndustries = industries();

  for (const industry of arrayIndustries) {
    const newBtnChip = document.createElement('button');

    newBtnChip.classList.add('header__chips--unit');
    newBtnChip.classList.add('js_chips_companies');
    newBtnChip.id = `${industry}`;

    const newContentBtnChip = document.createTextNode(`${industry}`);

    newBtnChip.appendChild(newContentBtnChip);

    filterChips.appendChild(newBtnChip);

    listenChips();
  }
}
