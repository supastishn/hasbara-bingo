 // Word bank for the Bingo card (add as many as you like; must be ≥24)
const WORDS = [
  'apple','banana','cherry','date','elderberry',
  'fig','grape','honeydew','kiwi','lime',
  'mango','nectarine','orange','papaya','quince',
  'raspberry','strawberry','tangerine','ugli','vanilla',
  'watermelon','xigua','yam','zucchini','apricot'
];

// Fisher–Yates shuffle: returns a new shuffled copy
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateBingoCard() {
  const container = document.getElementById('bingoCard');
  container.innerHTML = '';  // clear old

  // Shuffle and pick words (we need 24 + one FREE)
  const pool = shuffleArray(WORDS);
  let index = 0;
  // Build a 5×5 grid; center is FREE
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const cell = document.createElement('div');
      cell.className = 'bingo-cell';
      if (row === 2 && col === 2) {
        cell.classList.add('free');
        cell.textContent = 'FREE';
      } else {
        cell.textContent = pool[index++];
      }
      container.appendChild(cell);
    }
  }
}

// Wire up button
document.getElementById('generateBtn')
  .addEventListener('click', generateBingoCard);

// Generate on initial load
generateBingoCard();
