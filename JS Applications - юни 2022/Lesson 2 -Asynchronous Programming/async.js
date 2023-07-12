let e=document.getElementById('button');
e.addEventListener('click',onclick)

function onclick() {
  fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    .then(data => document.getElementById("text").value= JSON.stringify(data,null,2))
}
