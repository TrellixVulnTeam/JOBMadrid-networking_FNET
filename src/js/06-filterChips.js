// filter chips
function companiesFilter() {
  const companiesFilter = dataCompanies.filter((data) => {
    for (const chip of chipsFilter) {
      if (data.industry === chip) {
        return true;
      }
    }
    return false;
  });

  return companiesFilter;
}

function handleFilterBtn() {
  console.log('aqui estoy');
}

filterBtn.addEventListener('click', handleFilterBtn);
