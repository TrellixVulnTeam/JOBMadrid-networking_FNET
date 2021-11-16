// render cards companies

function renderCards() {
  
  for (const dataCompanie of dataCompanies) {

    let name = dataCompanie.name; 
    let founded = dataCompanie.founded;
    let industry = dataCompanie.industry;
    let size = dataCompanie.size; 
    let website = dataCompanie.website;

    const newArticleCard = document.createElement('article');
    const newDivTitle = document.createElement('div');
    const newH2Name = document.createElement('h2');
    const newParagraphYear = document.createElement('p');
    const newDivTags = document.createElement('div');
    const newDlIndustry = document.createElement('dl');
    const newDlSize = document.createElement('dl');
    const newDivLink = document.createElement('div');
    const newAWebsite = document.createElement('a');



    console.log(dataCompanie)
  }
}
