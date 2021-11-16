// collect server data
fetch(
  `https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json`
)
  .then((response) => response.json())
  .then((data) => {

    dataCompanies = data.map((aData) => {
      return {
        id: aData.id,
        name: aData.name === null ? 'unknown' : aData.name,
        founded: aData.founded === null ? 'unknown' : aData.founded,
        industry: aData.industry === null ? aData.id : aData.industry,
        size: aData.size === null ? 'unknown' : aData.size,
        website: aData.website === null ? 'unknown' : aData.website,
      };
    });

    renderCards()

    return dataCompanies;
  })

  .catch((error) => {
    console.log(error);
  });
