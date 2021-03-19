// get element
const judul = document.getElementById("judul");
const p = document.getElementsByTagName("p");
const p1 = document.getElementsByClassName("p1");
const p4 = document.querySelector("#b p");
const li1 = document.querySelector("section#b ul li:nth-child(1)");
const li2 = document.querySelector("section#b ul li:nth-child(2)");
const li3 = document.querySelector("section#b ul li:nth-child(3)");
//const p = document.querySelector("p");
//const p = document.querySelectorAll("p");

function ubahStyle(){
    judul.style.color = "lightskyblue";
    judul.style.backgroundColor = "ccc";
    judul.style.fontFamily = "sans-serif";
    judul.innerHTML = "Belajar DOM!";
}

p[0].style.backgroundColor= "lightblue";
p[1].style.backgroundColor= "lightblue";
p[2].style.backgroundColor= "yellow";
p[3].style.backgroundColor= "lightgreen";

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor= "lightgreen";
    
}

p1[0].innerHTML= "Ini diubah dari Javascript"

p4.style.color= "blue";
p4.style.fontSize= "30px";

li1.style.backgroundColor= "lightyellow";
li2.style.backgroundColor= "orange";
li3.style.backgroundColor= "grey";

//p.innerHTML= "Ini diubah melewati JavaScript";

//p[2].style.backgroundColor= "lightblue";