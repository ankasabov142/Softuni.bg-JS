let e=document.getElementById('button')
e.addEventListener("click", myFunction);

function myFunction(){
    const promise=fetch("https://swapi.dev/api/people/1");
    console.log(promise);
    promise.then(res => console.log(res))
}