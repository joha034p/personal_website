"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  addEventListeners();
}

function addEventListeners() {
  document.querySelectorAll(".project").forEach((element) => {
    element.addEventListener("mouseover", projectHover);
    element.addEventListener("mouseout", projectMouseout);
  });
}

function projectHover() {
  document.querySelector(`#${this.id} .txt h4`).classList.add("hide");
  document.querySelector(`#${this.id} .read`).classList.add("show");
}

function projectMouseout() {
  document.querySelector(`#${this.id} .txt h4`).classList.remove("hide");
  document.querySelector(`#${this.id} .read`).classList.remove("show");
}
