let question = document.querySelector(".question");
let sweetBtn = document.querySelector(".sweet");
let savoryBtn = document.querySelector(".savory");
let cakeBtn = document.querySelector(".cake");
let pieBtn = document.querySelector(".pie");
let steakBtn = document.querySelector(".steak");
let lasagnaBtn = document. querySelector(".lasagna");

sweetBtn.addEventListener("click", function () {
  console.log("Hi! LEFT BTN");
  question.innerHTML = "up or down";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  cakeBtn.style.display = "initial";
  pieBtn.style.display = "initial";
});

savoryBtn.addEventListener("click", function () {
  console.log("Hi! LEFT BTN");
  question.innerHTML = "up or down";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  steakBtn.style.display = "initial";
  lasagnaBtn.style.display = "initial";
});
