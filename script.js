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
    element.addEventListener("mousedown", projectClick);
  });
  document.querySelectorAll(".project_info .x").forEach((element) => {
    element.addEventListener("mousedown", closeProject);
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

function projectClick() {
  document.querySelector(`#${this.id} .txt h4`).classList.remove("hide");
  document.querySelector(`#${this.id} .read`).classList.remove("show");
  //   document.querySelector(`.${this.className}`).removeEventListener("mouseover", projectHover);
  //   document.querySelector(`.${this.className}`).removeEventListener("mouseout", projectMouseout);
  document.querySelector(`#${this.id} .project_info`).classList.remove("hide");
  addEventListeners();
}

function closeProject() {
  //   document.querySelector(`.${this.parentElement.className}`).removeEventListener("mousedown", projectClick);
  console.log(this.parentElement);
  this.parentElement.classList.add("hide");
  addEventListeners();
}
