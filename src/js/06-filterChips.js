// filter chips
function companiesFilter() {
  const companiesFilterArray = dataCompanies.filter((data) => {
    for (const chip of chipsFilter) {
      if (data.industry === chip) {
        return true;
      }
    }
    return false;
  });

  return companiesFilterArray;
}

function handleFilterBtn() {
  let companiesSelect = companiesFilter();

  if (Object.entries(companiesSelect).length === 0) {
    companiesSelect = dataCompanies;
  }

  renderCards(companiesSelect);
}

filterBtn.addEventListener('click', handleFilterBtn);
