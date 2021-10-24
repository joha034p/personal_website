"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  addEventListeners();
  scrollBottom();
}

function addEventListeners() {
  document.querySelectorAll(".project").forEach((element) => {
    element.addEventListener("mouseover", projectHover);
  });
  document.querySelectorAll(".project_info .x").forEach((element) => {
    element.addEventListener("mousedown", closeProject);
  });
}

function projectHover() {
  this.removeEventListener("mouseover", projectHover);
  this.addEventListener("mouseout", projectMouseout);
  this.addEventListener("mousedown", projectClick);
  document.querySelector(`#${this.id} .txt h4`).classList.add("hide");
  document.querySelector(`#${this.id} .read`).classList.add("show");
}

function projectMouseout() {
  this.removeEventListener("mouseout", projectMouseout);
  this.addEventListener("mouseover", projectHover);
  document.querySelector(`#${this.id} .txt h4`).classList.remove("hide");
  document.querySelector(`#${this.id} .read`).classList.remove("show");
}

function projectClick() {
  this.removeEventListener("mousedown", projectClick);
  this.removeEventListener("mouseout", projectMouseout);
  document.querySelector(`#${this.id} .project_info .x`).addEventListener("mousedown", closeProject);
  document.querySelector(`#${this.id} .project_info`).classList.add("show");
  document.querySelector(`#${this.id} .project_info`).classList.remove("hide");
}

function closeProject() {
  this.removeEventListener("mousedown", closeProject);
  this.parentElement.removeEventListener("mouseover", projectHover);
  this.parentElement.removeEventListener("mouseout", projectMouseout);
  this.parentElement.classList.add("hide");
  this.parentElement.classList.remove("show");
  addEventListeners();
}

function scrollBottom() {
  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.querySelector("footer").style.zIndex = "0";
      document.querySelector("footer h2").style.opacity = "1";
    } else {
      document.querySelector("footer").style.zIndex = "-1";
      document.querySelector("footer h2").style.opacity = "0";
    }
  };
}
