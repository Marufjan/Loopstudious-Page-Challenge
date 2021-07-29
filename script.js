"use strict";

const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".line");
const showModalAll = document.querySelector(".lines");
// const overlay = document.querySelector(".overlay-1");
const headerContent = document.querySelector(".header-content");

// Functions
const openModal = function () {
  modal.classList.remove("hidden");
  // overlay.classList.remove("hidden");
  headerContent.classList.add("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  // overlay.classList.add("hidden");
  headerContent.classList.remove("hidden");
};

// Showing Modal
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

showModalAll.addEventListener("click", openModal);

// Closing Modal
btnClose.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

window.addEventListener("resize", function () {
  modal.classList.add("hidden");
  // overlay.classList.add("hidden");
});
