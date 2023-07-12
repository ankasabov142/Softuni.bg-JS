let e=document.getElementById('button');
e.addEventListener('click',onclick)

function onclick() {
  fetch("https://restcountries.com/v3.1/name/bulgaria")
    .then(res => res.json())
    .then(data => document.getElementById("text").value= JSON.stringify(data,null,2))
}
