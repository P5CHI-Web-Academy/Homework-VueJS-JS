import "./assets/styles/style.scss";
import Logo from "./images/webpack-logo.png";
import printMeTest from "./print.js";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello webpack";

  const myIcon = new Image();
  myIcon.src = Logo;

  element.appendChild(myIcon);

  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMeTest;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
