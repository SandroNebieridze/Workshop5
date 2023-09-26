// დავალება 1

let box1 = document.querySelector("#divv");
box1.classList.add("wraper");

let img = document.createElement('img');
img.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg");
img.setAttribute("alt","image")
img.style.width = "700px"
box1.insertAdjacentElement('beforeend',img)

let H2 = document.createElement("h2");
H2.classList.add("title");
H2.textContent = "image title";
H2.style.fontSize = "30px";
H2.style.color = "red";
box1.insertAdjacentElement("beforeend", H2)



// დავალება 2
let box2 = document.querySelector(".box2")
let text = document.createElement("p");
text.classList.add("text")
text.textContent = "hello"

box2.insertAdjacentElement("beforeend", text)



// დავალება 3

let a = document.createElement('a');
a.href = "https://google.com";
a.setAttribute("target", "_blank")
a.textContent = "google link"
a.classList.add("link");
a.classList.replace("link", "newclass");
let box = document.querySelector(".box");
box.insertAdjacentElement("beforeend",a)









