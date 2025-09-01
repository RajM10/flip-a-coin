import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <p id="heading-of-page">Coin flipper</p>
    <div class="container">
        <div class="coin-div">
            <img class="coin" src="/coin/heads.png" alt="tails.png">
        </div>
    </div>
    <div id="button-result">
       <button id="flip-button"><img id="coin-image" src="/coin.png"></button>
       <p id="result"></p>
    </div>
`;

export function result() {
  const randomValue = Math.random();
  if (randomValue >= 0.54) return "heads";
  else return "tails";
}

document.getElementById("flip-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "Flipping..";
  //selecting element onwhich animation we have to apply
  const element = document.querySelector(".coin");
  const element2 = document.querySelector(".container");

  //applying animation
  element.style = "animation:coinSpin 300ms linear infinite;";
  element2.style = "animation:coinFall 1.5s ease-out ;";

  const Result = result();

  setTimeout(() => {
    element.style.animation = "none";
    element2.style.animation = "none";
    console.log(Result);
    changingImg(`/coin/${Result}`);
    resultElement.innerHTML = `It's <span style="text-transform: capitalize;">${Result}</span>`;
  }, 1500);
});

export function changingImg(inputValue) {
  const element = document.querySelector(".coin-div");
  element.innerHTML = `<img class="coin" src="${inputValue}.png">`;
}
