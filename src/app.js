/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let button = document.querySelector("#button");
button.addEventListener(
  "click",
  (window.onload = function() {
    //write your code here
    const palos = ["♦", "♥", "♠", "♣"];

    let indexPalo = Math.floor(Math.random() * palos.length);

    //1. obtener el elemento
    //2. manipular
    let top = document.querySelector(".top");
    top.innerHTML = palos[indexPalo];

    let bottom = document.querySelector(".bottom");
    bottom.innerHTML = palos[indexPalo];

    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      top.style.color = "red";
    } else {
      top.style.color = "black";
    }
    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      bottom.style.color = "red";
    } else {
      bottom.style.color = "black";
    }

    const number = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    let indexnumber = Math.floor(Math.random() * number.length);

    let numero = document.querySelector(".number");

    //2. manipular
    numero.innerHTML = number[indexnumber];

    for (let i = 1; i <= 3; i++) {
      document.body.innerHTML += `<div class="card m-auto" style="width: 18rem;">
      <div class="card-body">
        <div class="top">${palos[indexPalo]}</div>
        <div class="number">${number[indexnumber]}</div>
        <div class="bottom">${palos[indexPalo]}</div>
      </div>
    </div>`;
    }
  })
);
