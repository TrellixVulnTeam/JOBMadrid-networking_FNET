// render cards companies

function renderCards(data) {

  cardsCompanies.innerHTML = '';

  for (const dataCompanie of data) {

    let id = dataCompanie.id;
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

    newArticleCard.classList.add('card');
    newArticleCard.id = `${id}`;
    newDivTitle.classList.add('card__title');
    newH2Name.classList.add('card__name');
    newParagraphYear.classList.add('card__year');
    newDivTags.classList.add('card__tags');
    newDlIndustry.classList.add('card__tags--industry');
    newDlSize.classList.add('card__tags--size');
    newDlIndustry.classList.add('tag');
    newDlSize.classList.add('tag');
    newDivLink.classList.add('card__container-link');
    newAWebsite.classList.add('card__link');
    newAWebsite.target = '_blank';


    const newContentName = document.createTextNode(`${name}`);
    const newContentFounded = document.createTextNode(`${founded}`);
    const newContentIndustry = document.createTextNode(`${industry}`);
    const newContentSize = document.createTextNode(`${size}`);
    const newContentWebsite = document.createTextNode('Website')
    newAWebsite.href = `http://${website}`;

    newH2Name.appendChild(newContentName);
    newParagraphYear.appendChild(newContentFounded);
    newDlIndustry.appendChild(newContentIndustry);
    newDlSize.appendChild(newContentSize);
    newAWebsite.appendChild(newContentWebsite)

    newArticleCard.appendChild(newDivTitle);
    newDivTitle.appendChild(newH2Name);
    newDivTitle.appendChild(newParagraphYear);
    newArticleCard.appendChild(newDivTags);
    newDivTags.appendChild(newDlIndustry);
    newDivTags.appendChild(newDlSize);
    newArticleCard.appendChild(newDivLink);
    newDivLink.appendChild(newAWebsite);

    cardsCompanies.appendChild(newArticleCard)
  }
}
