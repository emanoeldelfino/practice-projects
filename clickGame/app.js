const label = document.querySelector("label[for=box]");

label.addEventListener("click", () => {
  const ms = 2000;
  const elem = document.createElement("span");
  elem.textContent = "+";
  elem.style.cssText = `
  position: absolute;
  top: 10px;
  width: 40px;
  height: 40px;
  font-size: 40px;
  top: -40px;
  color: #000000;
  text-align: center;
  line-height: 40px;
  animation-name: move-plus;
  animation-duration: ${ms / 1000}s;
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
