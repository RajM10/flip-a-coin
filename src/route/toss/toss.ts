export default function Toss() {
  const tossHTML = `
    <div id="app-container">
      <header id="main-header">
        <h1 id="heading-of-page">Coin Flipper</h1>
      </header>
      
      <div id="main-content">
        <div id="coin-flip-section">
          <div id="coin-container">
            <img id="coin" src="/coin/heads.png" alt="coin">
          </div>
          <div id="button-result">
            <button id="flip-button">
              <img id="coin-image" src="/coin.png" alt="flip">
            </button>
            <p id="result"></p>
          </div>
        </div>
        
        <div id="info-section">
          <div id="purpose-container">
            <h2>Purpose</h2>
            <p>This website helps you test whether a coin flip is fair or biased. By tracking your flips in real-time, you can see the probability of heads vs tails and determine if the coin is truly random.</p>
          </div>
          
          <div id="stats-container">
            <h2>Real-time Statistics</h2>
            <div id="stats-grid">
              <div class="stat-item">
                <span class="stat-label">Total Flips:</span>
                <span id="total-flips" class="stat-value">0</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Heads:</span>
                <span id="heads-count" class="stat-value">0</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Tails:</span>
                <span id="tails-count" class="stat-value">0</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Heads %:</span>
                <span id="heads-percentage" class="stat-value">0%</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Tails %:</span>
                <span id="tails-percentage" class="stat-value">0%</span>
              </div>
            </div>
          </div>
          
          <div id="fairness-indicator">
            <h3>Fairness Check</h3>
            <div id="fairness-bar">
              <div id="fairness-fill"></div>
            </div>
            <p id="fairness-text">Start flipping to check fairness!</p>
          </div>
        </div>
      </div>
    </div>
`;
  return tossHTML;
}
