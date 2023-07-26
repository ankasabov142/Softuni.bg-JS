function solve() {
  const url = "http://localhost:3030/jsonstore/bus/schedule/:";
  const infoTable = document.querySelector(".info");
const departButton=document.getElementById('depart');
const arriveButton=document.getElementById('arrive');

const busStop={next : 'Depot'};

  function depart() {
    departButton.disabled=true;
    arriveButton.disabled=false;
  }

  function arrive() {
    arriveButton.disabled=true;
    departButton.disabled=false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
