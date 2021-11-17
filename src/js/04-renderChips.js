// render chips

function industries(data) {
  const allIndustries = data.map((aData) => {
    return aData.industry;
  });

  const filterIndustries = allIndustries.filter((value, index) => {
    return allIndustries.indexOf(value) === index;
  });
  return filterIndustries;
}

