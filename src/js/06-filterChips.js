const filter = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const companiesData = [{name:'Susana', edad:28},{name:'Rocío', edad:28}, {name:'Inmaculada', edad:28}]

const companies = companiesData.filter(data => {
  
  for (const filterOne of filter) {
    if (data.name === filterOne) {
      return true
    }  } 
  return false
  
}

);

console.log(companies);