"use strict";

let maincolor = "var(--maincolor)";
let secondaryColor = "var(--secondarycolor)";
let interval;
let dot = true;
let dots = document.querySelectorAll(".dot");
document.addEventListener("DOMContentLoaded", () => {
  populateDivs();
  displayDate();
  interval = setInterval(displayDate, 1000);
});
function color(mainselector, sideselector, truth) {
  let colr = truth ? maincolor : secondaryColor;
  let div = document.querySelectorAll(`.${mainselector}`)[0];
  div.querySelectorAll(`.${sideselector}`)[0].style.backgroundColor = colr;
}
function display(number, mainselector) {
  mainselector = mainselector ? mainselector : "hour2";
  let sideselector = [];
  switch (parseInt(number)) {
    case 1:
      sideselector = ["c", "f"];
      break;
    case 2:
      sideselector = ["a", "c", "d", "e", "g"];
      break;
    case 3:
      sideselector = ["a", "c", "d", "f", "g"];
      break;
    case 4:
      sideselector = ["b", "c", "d", "f"];
      break;
    case 5:
      sideselector = ["a", "b", "d", "f", "g"];
      break;
    case 6:
      sideselector = ["a", "b", "d", "f", "e", "g"];
      break;
    case 7:
      sideselector = ["a", "c", "f"];
      break;
    case 8:
      sideselector = ["a", "b", "c", "d", "e", "f", "g"];
      break;
    case 9:
      sideselector = ["a", "b", "c", "d", "f", "g"];
      break;
    case 0:
      sideselector = ["a", "b", "c", "e", "f", "g"];
      break;
    default:
      break;
  }
  showNumber(mainselector, sideselector);
}
function showNumber(mainselector, sideselector) {
  let total = ["a", "b", "c", "d", "e", "f", "g"];
  let sideselectorLength = sideselector.length;
  let remaining = [];
  total.forEach(element => {
    if (!sideselector.includes(element)) {
      remaining.push(element);
    }
  });
  let remainingLength = remaining.length;
  for (let i = 0; i < sideselectorLength; i++) {
    color(mainselector, sideselector[i], true);
  }
  for (let i = 0; i < remainingLength; i++) {
    color(mainselector, remaining[i]);
  }
}

function displayDate() {
  let date = new Date();
  for (let i = 0; i < 4; i++) {
    dots[i].style.backgroundColor = maincolor;
  }
  setTimeout(function() {
    for (let i = 0; i < 4; i++) {
      dots[i].style.backgroundColor = secondaryColor;
    }
  }, 500);
  let min = date.getMinutes();
  let hours = date.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  let seconds = date.getSeconds();
  let mindigit1 = parseInt(min / 10);
  let mindigit2 = min % 10;
  let hourdigit1 = parseInt(hours / 10);
  let hourdigit2 = hours % 10;
  let secdigit1 = parseInt(seconds / 10);
  let secdigit2 = seconds % 10;
  display(mindigit2, "hour4");
  display(mindigit1, "hour3");
  display(hourdigit1, "hour1");
  display(hourdigit2, "hour2");
  display(secdigit1, "hour5");
  display(secdigit2, "hour6");
}
function populateDivs() {
  let abc = ["a", "b", "c", "d", "e", "f", "g"];
  let hours = ["hour1", "hour2", "hour3", "hour4", "hour5", "hour6"];
  hours.forEach(a => {
    abc.forEach(e => {
      let div = document.createElement("div");
      div.className = e;
      document.querySelectorAll(`.${a}`)[0].append(div);
    });
  });
}
