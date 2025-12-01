let question = document.querySelector(".question");
let sweetBtn = document.querySelector(".sweet");
let savoryBtn = document.querySelector(".savory");
let cakeBtn = document.querySelector(".cake");
let pieBtn = document.querySelector(".pie");
let steakBtn = document.querySelector(".steak");
let lasagnaBtn = document. querySelector(".lasagna");
let cakeEat = document.querySelector(".cakeEat");
let pieEat = document.querySelector(".pieEat");
let steakEat = document.querySelector(".steakEat");
let lasagnaEat = document.querySelector(".lasagnaEat");
let cakeImage = document.querySelector(".cakeImage");
let pieImage = document.querySelector(".pieImage");
let steakImage = document.querySelector(".steakImage");
let lasagnaImage = document.querySelector(".lasagnaImage");
let kitchen = document.querySelector(".kitchen");

sweetBtn.addEventListener("click", function () {
  console.log("sweet");
  question.innerHTML = "Cake or pie? Press any key for cake and double click for pie!";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  cakeBtn.style.display = "initial";
  pieBtn.style.display = "initial";
});

savoryBtn.addEventListener("click", function () {
  console.log("savory");
  question.innerHTML = "Steak or lasagna";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  steakBtn.style.display = "initial";
  lasagnaBtn.style.display = "initial";
  });

cakeBtn.addEventListener("keyup", function () {
  console.log("Hi! CAKE BTN");
  cakeBtn.style.display = "none";
  pieBtn.style.display = "none";
  question.innerHTML= "eat it!";
  kitchen.src = "cake.png";
  cakeEat.style.display = "initial";
});

pieBtn.addEventListener("dblclick", function () {
  console.log("Hi! PIE BTN");
  cakeBtn.style.display = "none";
  pieBtn.style.display = "none";
  question.innerHTML= "eat it!";
  kitchen.src = "pie.png";
  pieEat.style.display = "initial";
});

steakBtn.addEventListener("mouseover", function () {
  console.log("Hi! STEAK BTN");
  steakBtn.style.display = "none";
  lasagnaBtn.style.display = "none";
  question.innerHTML= "eat it!";
  kitchen.src = "steak.png";
  steakEat.style.display = "initial";
});

lasagnaBtn.addEventListener("dblclick", function () {
  console.log("Hi! LASAGNA BTN");
  steakBtn.style.display = "none";
  lasagnaBtn.style.display = "none";
  question.innerHTML= "eat it!";
  kitchen.src = "lasagna.png";
  lasagnaEat.style.display = "initial";
});