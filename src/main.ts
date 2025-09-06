import { Result } from "./route/toss/helper/Result";
import Toss from "./route/toss/toss";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = Toss();

// Statistics tracking
let totalFlips = 0;
let headsCount = 0;
let tailsCount = 0;

const flipBtn = document.getElementById("flip-button") as HTMLButtonElement;
const resultElement = document.getElementById("result");
const coin = document.getElementById("coin") as HTMLImageElement;

// Get stats elements
const totalFlipsElement = document.getElementById("total-flips");
const headsCountElement = document.getElementById("heads-count");
const tailsCountElement = document.getElementById("tails-count");
const headsPercentageElement = document.getElementById("heads-percentage");
const tailsPercentageElement = document.getElementById("tails-percentage");
const fairnessFillElement = document.getElementById("fairness-fill");
const fairnessTextElement = document.getElementById("fairness-text");

function updateStats() {
  if (
    !totalFlipsElement ||
    !headsCountElement ||
    !tailsCountElement ||
    !headsPercentageElement ||
    !tailsPercentageElement ||
    !fairnessFillElement ||
    !fairnessTextElement
  )
    return;

  totalFlipsElement.textContent = totalFlips.toString();
  headsCountElement.textContent = headsCount.toString();
  tailsCountElement.textContent = tailsCount.toString();

  const headsPercentage =
    totalFlips > 0 ? ((headsCount / totalFlips) * 100).toFixed(1) : "0";
  const tailsPercentage =
    totalFlips > 0 ? ((tailsCount / totalFlips) * 100).toFixed(1) : "0";

  headsPercentageElement.textContent = `${headsPercentage}%`;
  tailsPercentageElement.textContent = `${tailsPercentage}%`;

  // Calculate fairness (closer to 50% = more fair)
  const headsPercent = parseFloat(headsPercentage);
  const fairness = 100 - Math.abs(headsPercent - 50) * 2; // 100% when exactly 50/50
  fairnessFillElement.style.width = `${Math.max(0, fairness)}%`;

  // Update fairness text
  if (totalFlips < 10) {
    fairnessTextElement.textContent = "Need more flips for accurate results!";
  } else if (fairness >= 90) {
    fairnessTextElement.textContent = "Very fair coin! 🎯";
  } else if (fairness >= 70) {
    fairnessTextElement.textContent = "Fair coin ✅";
  } else if (fairness >= 50) {
    fairnessTextElement.textContent = "Somewhat fair ⚠️";
  } else {
    fairnessTextElement.textContent = "Potentially biased coin! 🚨";
  }
}

function handleClick() {
  resultElement!.innerHTML = "Flipping..";
  //selecting element onwhich animation we have to apply
  const element2 = document.getElementById("coin-container");
  if (!element2) return;

  //applying animation
  coin!.style = "animation:coinSpin 300ms linear infinite;";
  element2.style = "animation:coinFall 1.5s ease-in-out ;";
  const result = Result();

  setTimeout(() => {
    coin!.style.animation = "none";
    element2.style.animation = "none";
    changingImg(`/coin/${result}`);
    resultElement!.innerHTML = `It's <span style="text-transform: capitalize;">${result}</span>`;

    // Update statistics
    totalFlips++;
    if (result === "heads") {
      headsCount++;
    } else {
      tailsCount++;
    }
    updateStats();
  }, 1500);
}

flipBtn.addEventListener("click", handleClick);

export function changingImg(inputValue: String) {
  coin.src = `${inputValue}.png`;
}

// Initialize stats display
updateStats();
