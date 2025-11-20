let question = document.querySelector(".question");
let sweetBtn = document.querySelector(".sweet");
let savoryBtn = document.querySelector(".savory");
let cakeBtn = document.querySelector(".cake");
let pieBtn = document.querySelector(".pie");
let steakBtn = document.querySelector(".steak");
let lasagnaBtn = document. querySelector(".lasagna");
let cakeEat = document.querySelector(".cakeEat");
let cakeImage = document.querySelector(".cakeImage");
let pieImage = document.querySelector(".pieImage");
let steakImage = document.querySelector(".steakImage");
let lasagnaImage = document.querySelector(".lasagnaImage");
let cryBtn = document.querySelector(".cry");
let sadMan = document.querySelector(".sad");
let kitchen = document.querySelector(".kitchen");

sweetBtn.addEventListener("click", function () {
  console.log("Hi! LEFT BTN");
  question.innerHTML = "cake or pie?";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  cakeBtn.style.display = "initial";
  pieBtn.style.display = "initial";
  cryBtn.style.display = "none";
});

savoryBtn.addEventListener("click", function () {
  console.log("Hi! RIGHT BTN");
  question.innerHTML = "steak or lasagna";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  steakBtn.style.display = "initial";
  lasagnaBtn.style.display = "initial";
  cryBtn.style.display = "none";
  });

cakeBtn.addEventListener("dblclick", function () {
  console.log("Hi! BTN");
  cakeImage.style.display = "initial";
  cakeBtn.style.display = "none";
  pieBtn.style.display = "none";
  question.style.display= "none";
});

pieBtn.addEventListener("dblclick", function () {
  console.log("Hi! BTN");
  cakeBtn.style.display = "none";
  pieImage.style.display = "initial";
  pieBtn.style.display = "none";
  question.style.display= "none";
});

steakBtn.addEventListener("dblclick", function () {
  console.log("Hi! BTN");
  steakImage.style.display = "initial";
  steakBtn.style.display = "none";
  lasagnaBtn.style.display = "none";
  question.style.display= "none";
});

lasagnaBtn.addEventListener("dblclick", function () {
  console.log("Hi! BTN");
  lasagnaImage.style.display = "initial";
  steakBtn.style.display = "none";
  lasagnaBtn.style.display = "none";
  question.style.display= "none";
});

cryBtn.addEventListener("click", function() {
  console.log("aaaaaaaaaaahhhhhhhhhhhh");
  question.innerHTML = "if you can see this, my code failed :(";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  
});