/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let newArray = [];

  function randomCard() {
    //write your code herefunction ramdomCard() {
    const palos = ["♥", "♣", "♠", "♦"];

    // let indexPalo = Math.floor(Math.random() * palos.length);
    // console.log(indexPalo);
    // let palo = palos[indexPalo];
    // console.log(palo);

    // Trabajamos con number

    const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    // let indexnumber = Math.floor(Math.random() * number.length);
    // let numero = number[indexnumber];

    let indexnumber = Math.floor(Math.random() * number.length);
    let indexPalo = Math.floor(Math.random() * palos.length);
    // let palo = palos[indexPalo]; //acá obtengo el palo
    // let numero = number[indexnumber];
    // console.log(palo);
    // console.log(numero);
    // let carta = [palo, numero];
    // console.log(carta);

    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      document.getElementById(
        "cards"
      ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
      <div class="card-body">
          <div class="top text-danger">${palos[indexPalo]}</div>
          <div class="number text-danger">${number[indexnumber]}</div>
          <div class="bottom text-danger">${palos[indexPalo]}</div>
      </div>
  </div>`;
      newArray.push({
        numero: number[indexnumber],
        palo: palos[indexPalo]
      });
    } else {
      document.getElementById(
        "cards"
      ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
      <div class="card-body">
          <div class="top">${palos[indexPalo]}</div>
          <div class="number">${number[indexnumber]}</div>
          <div class="bottom">${palos[indexPalo]}</div>
      </div>
  </div>`;
      newArray.push({
        numero: number[indexnumber],
        palo: palos[indexPalo]
      });
    }
    return newArray;
    //   Traigo mi div para construir el loop

    // Trabajamos con bottom
  }
  // console.log(bubbleSort(newArray));
  function cartasEnOrden() {
    document.getElementById("cards").innerHTML = "";
    for (let i = 0; i <= newArray.length - 1; i++) {
      let palito = newArray[i].palo;
      let numeros = newArray[i].numero;
      // console.log(palito);
      // console.log(numeros);
      if (palito == "♥" || palito == "♦") {
        document.getElementById(
          "cards"
        ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
    <div class="card-body">
        <div class="top text-danger">${palito}</div>
        <div class="number text-danger">${numeros}</div>
        <div class="bottom text-danger">${palito}</div>
    </div>
</div>`;
      } else {
        document.getElementById(
          "cards"
        ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
    <div class="card-body">
        <div class="top">${palito}</div>
        <div class="number">${numeros}</div>
        <div class="bottom">${palito}</div>
    </div>
</div>`;
      }
    }
    newArray = [];
  }
  // Acá termina la función de generar cartas
  let todascartas = [];

  function variascartas(input) {
    document.getElementById("cards").innerHTML = "";
    for (let i = 1; i <= input; i++) {
      let newCard = randomCard();
      todascartas.push(newCard);
    }
  }

  function letrasANumeros() {
    for (let i = 0; i <= newArray.length - 1; i++) {
      if (newArray[i].numero === "A") {
        newArray[i].numero = 14;
      }
      if (newArray[i].numero === "K") {
        newArray[i].numero = 13;
      }
      if (newArray[i].numero === "Q") {
        newArray[i].numero = 12;
      }
      if (newArray[i].numero === "J") {
        newArray[i].numero = 11;
      }
    }
  }

  // let input = document.querySelector("#input");
  // let button = document.querySelector("#button1");
  // button.addEventListener("click", variascartas);

  document.getElementById("button1").addEventListener("click", () => {
    let tomarvalor = document.getElementById("input");
    variascartas(tomarvalor.value);
    // console.log(tomarvalor.value);
  });
  document.getElementById("button2").addEventListener("click", () => {
    letrasANumeros();
    bubbleSort(newArray);
    numerosALetras();
    cartasEnOrden();
  });

  const bubbleSort = arr => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (arr[index].numero > arr[index + 1].numero) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall for optimization
    }
    return arr;
  };

  function numerosALetras() {
    for (let i = 0; i <= newArray.length - 1; i++) {
      if (newArray[i].numero === 14) {
        newArray[i].numero = "A";
      }
      if (newArray[i].numero === 13) {
        newArray[i].numero = "K";
      }
      if (newArray[i].numero === 12) {
        newArray[i].numero = "Q";
      }
      if (newArray[i].numero === 11) {
        newArray[i].numero = "J";
      }
    }
  }
};
// return arr;
// };
// };
// };
