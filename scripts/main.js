var header = document.getElementById("header");

header.style = "background:#777; border: border; 1px solid #eaea10";

var title = document.createElement("h1"); 

title.textContent="Random TIp Generator";

header.appendChild("title");

var description =document.createElement("p");
description.innerHTML = "this is a description";
header.appendChild("description");