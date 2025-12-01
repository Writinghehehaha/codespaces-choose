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
let sadChef = document.querySelector(".sadChef");

sweetBtn.addEventListener("click", function () {
  console.log("sweet");
  question.innerHTML = "Cake or pie? Press any key for cake and double click for pie! (Make sure you've clicked the cake button first)";
  sweetBtn.style.display = "none";
  savoryBtn.style.display = "none";
  cakeBtn.style.display = "initial";
  pieBtn.style.display = "initial";
});

savoryBtn.addEventListener("mouseover", function () {
  console.log("savory");
  question.innerHTML = "Steak or lasagna? Click for steak button or double click for lasagna!";
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

steakBtn.addEventListener("click", function () {
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
  question.innerHTML = "eat it!";
  kitchen.src = "lasagna.png";
  lasagnaEat.style.display = "initial";
});

cakeEat.addEventListener("click", function(){
console.log("cakeEnd");
cakeEat.style.display = "none";
kitchen.src = "sadChef.png";
question.innerHTML = "The chef remarks that you weren't supposed to eat the whole thing in one sitting. You now have a stomach ache. BAD END.";
});

pieEat.addEventListener("click", function(){
console.log("pieEnd");
pieEat.style.display = "none";
kitchen.src = "kitchenImage.png";
question.innerHTML = "The pie was good. You give your compliments to your chef. GOOD END.";
});

steakEat.addEventListener("click", function(){
console.log("steakEnd");
steakEat.style.display = "none";
kitchen.src = "kitchenImage.png";
question.innerHTML = "The steak was pretty good. You give your compliments to your chef. GOOD END.";
});

lasagnaEat.addEventListener("click", function(){
console.log("lasagnaEnd");
lasagnaEat.style.display = "none";
kitchen.src = "sadChef.png";
question.innerHTML = "It didn't taste good. You pretend that it isn't going to give you a stomachache, but your chef can tell. BAD END.";
});