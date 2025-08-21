const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Corrección de uso de queryselector (class .)
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location'); 


// se agrega async para poder usar await
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // uso de data para obtener el JSON
  const data = await response.json();
  // Comento console log para que no se vea en consola
  // console.log(data);
  // Uso de backticks para variables
  $n.textContent = `Name : ${data.name}`;
  $b.textContent = `Blog: ${data.blog}`;
  $l.textContent = `Location: ${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);