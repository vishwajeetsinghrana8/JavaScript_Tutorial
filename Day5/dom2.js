// Style Property
var var1 = document.querySelector("h1");

var1.style.color = "hotpink";

var1.style.border = "5px solid yellow";

var1.style.fontSize = "40px";

var1.style.background = "lightgreen";

var1.style.marginTop = "50px";

// 1. HTML - Structure
// 2. CSS - Present
// 3. JavaScript - Behaviour

var para = document.querySelector("p");

para.classList.add("big");
para.classList.remove("big");
// para.classList.toggle("big");

var p = document.querySelector("p");
p.textContent = "Welcome to Day-5 of JavaScript Training";

var img = document.getElementsByTagName("img")[0];
console.log(img);
img.setAttribute("src", "https://www.gannett-cdn.com/presto/2020/05/27/USAT/cad1b1bb-6924-49c5-bfe0-848d424045fb-XXX_IMG_XXX_IMG_CAPTAIN_AMER_4_1_N9HVDDLQ_1.JPG?crop=3102,2327,x0,y0&quality=50&width=640");

var ar = document.querySelector("a");
ar.setAttribute("href", "https://www.knowledgeshelfit.com");

var var2 = document.querySelector("a");
var2.textContent = "Knowledge Shelf";