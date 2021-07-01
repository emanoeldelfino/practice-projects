const label = document.querySelector("button#click");
const bTotalClicks = document.querySelector("div#counter-box span b#counter");
const refreshButton = document.querySelector("span#refresh");

if (localStorage.getItem("clicks") === null) {
  localStorage.setItem("clicks", "0");
}

bTotalClicks.textContent = localStorage.getItem("clicks");

label.addEventListener("click", () => {
  let clicks = Number(localStorage.getItem("clicks"));
  clicks += 1;
  localStorage.setItem("clicks", clicks);
  const ms = screen.height * 1.5;
  const elem = document.createElement("span");
  bTotalClicks.textContent = localStorage.getItem("clicks");
  elem.textContent = "+1"
  elem.style.cssText = `
  position: fixed;
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: #000000;
  text-align: center;
  line-height: 40px;
  animation-name: move-plus;
  animation-duration: ${ms}ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  pointer-events: none;
  opacity: 1;
  user-select: none;
  `;
  document.body.appendChild(elem);
  setTimeout(() => {
    document.body.removeChild(elem);
  }, ms - 100)
});

refreshButton.addEventListener("click", () => {
  localStorage.clear();
  bTotalClicks.textContent = "0";
})
