/* eslint-disable */
import "bootstrap";
import "./style.css";
var sortArr = [];
const createCard = () => {
  let num = document.querySelector("#input").value;
  console.log(num, "here");
  let card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let suit = ["♠", "♥", "♣", "♦"];
  let parentDiv = document.getElementById("cardcontainer");
  parentDiv.innerHTML = "";
  for (let i = 0; i < num; i++) {
    let randomCard = card[Math.floor(Math.random() * card.length)];
    let randomSuit = suit[Math.floor(Math.random() * suit.length)];
    sortArr.push(card.indexOf(randomCard));
    let color = "";
    if (randomSuit == "♥" || randomSuit == ":diamonds:") {
      color = "text-danger";
    }
    let myString = `
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto rounded-top mt-5" style="height: 40px">
          <p class="h2 card1 ${color}">${randomSuit}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto justify-content-center" style="height: 40px">
          <p class="h2 center ${color}">${randomCard}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto justify-content-end align-items-end rounded-bottom" style="height: 40px">
          <h1 class="h2 card1 ${color}">${randomSuit}</h1>
        </div>
      </div>
    `;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = myString;
    newDiv.classList.add("mx-4");
    newDiv.style.width = "40px";
    parentDiv.appendChild(newDiv);
  }
};
const printCard = (arr, location) => {
  let parentDiv = document.querySelector(location);
  parentDiv.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let print2 = arr[i];
    let card = [
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
    let suit = ["♠", "♥", "♣", "♦"];
    let randomSuit = suit[Math.floor(Math.random() * suit.length)];
    let color = "";
    if (randomSuit == "♥" || randomSuit == "♦") {
      color = "text-danger";
    }
    let myString = `
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto rounded-top mt-5" style="height: 40px">
          <p class="h2 card1 ${color}">${randomSuit}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto justify-content-center" style="height: 40px">
          <p class="h2 center ${color}">${card[print2]}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-white d-flex mr-auto justify-content-end align-items-end rounded-bottom" style="height: 40px">
          <h1 class="h2 card1 ${color}">${randomSuit}</h1>
        </div>
      </div>
    `;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = myString;
    newDiv.classList.add("mx-4");
    newDiv.style.width = "40px";
    parentDiv.appendChild(newDiv);
  }
};
const bubbleSort = arr => {
  let iterationList = document.getElementById("iterationList");
  let wall = arr.length - 1; // we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      // compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index] > arr[index + 1]) {
        console.log(arr[index]);
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }

      const newIteration = document.createElement("li");
      newIteration.id = "iteration" + (index + 1).toString();
      iterationList.appendChild(newIteration);
      printCard(arr, "#iteration" + (index + 1).toString());
      index++;
    }
    wall--; // decrease the wall for optimization
  }
  return arr;
};
window.onload = function() {
  console.log("Hello Rigo from the console!");
  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  if (button1) {
    button1.addEventListener("click", function() {
      createCard();
    });
  }
  if (button2) {
    button2.addEventListener("click", function() {
      bubbleSort(sortArr);
      sortArr = [];
    });
  }
};
