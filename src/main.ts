import { Result } from "./route/toss/helper/result";
import Toss from "./route/toss/toss";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = Toss();

const flipBtn = document.getElementById("flip-button") as HTMLButtonElement;
const resultElement = document.getElementById("result");
const coin = document.getElementById("coin") as HTMLImageElement;

function handleClick() {
  resultElement!.innerHTML = "Flipping..";
  //selecting element onwhich animation we have to apply
  const element2 = document.getElementById("coin-container");
  if (!element2) return;

  //applying animation
  coin!.style = "animation:coinSpin 300ms linear infinite;";
  element2.style = "animation:coinFall 1.5s ease-out ;";
  const result = Result();

  setTimeout(() => {
    coin!.style.animation = "none";
    element2.style.animation = "none";
    changingImg(`/coin/${result}`);
    resultElement!.innerHTML = `It's <span style="text-transform: capitalize;">${result}</span>`;
  }, 1500);
}

flipBtn.addEventListener("click", handleClick);

export function changingImg(inputValue: String) {
  coin.src = `${inputValue}.png`;
}
