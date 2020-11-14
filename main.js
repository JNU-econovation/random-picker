let list = ["기표", "유리", "양하", "서영"];
let interval;
let resultBox = document.querySelector(".normal");
let concrateMent = document.querySelector(".conct");
let box = document.querySelector(".shape");
let ment = "축하합니다";
let status = "PEND";
const interverEvent = () => {
  let number = Math.floor(Math.random() * list.length);
  resultBox.innerHTML = list[number];
};

const randomPick = () => {
  interval = setInterval(interverEvent, 25);
};

const startPick = (event) => {
  status = "START";
  box = document.querySelector(".shape");
  console.log(box);
  box.classList.add("start");
  randomPick();
  box.addEventListener("click", (event) => {
    console.log(event);
    if (status == "START") {
      clearInterval(interval);
      resultBox.classList.add("congc");
      concrateMent.innerHTML = ment;
      status = "PEND";
    } else {
      concrateMent.innerHTML = "";
      resultBox.classList.remove("congc");
      randomPick();
      status = "START";
    }
  });
};

document.querySelector(".special").addEventListener("click", startPick);
