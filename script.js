let question = document.querySelector(".question");
let sweetBtn = document.querySelector(".sweet");
let savoryBtn = document.querySelector(".savory");
let cakeBtn = document.querySelector(".cake");
let pieBtn = document.querySelector(".pie");
let steakBtn = document.querySelector(".steak");
let lasagnaBtn = document. querySelector(".lasagna");
let cakeEat = document.querySelector("cakeEat");
let cakeImage = document.querySelector("cakeImage");
let cry = document.querySelector("cry");
let sadMan = document.querySelector("sad");

sweetBtn.addEventListener("click", function () {
  console.log("Hi! LEFT BTN");
  question.innerHTML = "cake or pie?";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  cakeBtn.style.display = "initial";
  pieBtn.style.display = "initial";
});

savoryBtn.addEventListener("click", function () {
  console.log("Hi! RIGHT BTN");
  question.innerHTML = "steak or lasagna";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  steakBtn.style.display = "initial";
  lasagnaBtn.style.display = "initial";
  });

cakeBtn.addEventListener("dblclick", function () {
  console.log("Hi! BTN");
  cakeImage.style.display = "initial";
  cakeBtn.style.display = "none";
  question.style.display= "none";
});

cry.addEventListener("click", function() {
  console.log("aaaaaaaaaaahhhhhhhhhhhh");
  question.innerHTML = "if you can see this, my code failed :(";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  sadMan.style.display = "initial";
});