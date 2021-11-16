'use strict';

console.log('>> Ready :)');


fetch(
  `https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json`
)
  .then((response) => response.json())
  .then((json) => {
    const companies = json.map((data) => {
      return {
        name: data.name === null ? 'Desconocido' : data.name,
        founded: data.founded === null ? 'Desconocido' : data.founded,
        id: data.id,
        industry: data.industry === null ? data.id : data.industry,
        size: data.size === null ? 'Desconocido' : data.size,
        website: data.website === null ? 'Desconocido' : data.website,
      };
    });
    console.log(companies   )
    return companies;
  })
  .catch((error) => {
    console.log(error);
  });