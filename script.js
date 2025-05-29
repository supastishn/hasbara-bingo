 // Word bank of commonly used Hasbara (pro-Israel) terms (must be ≥24)
const WORDS = [
  'not a genocide','only democracy in the middle east','necesarry for security','israeli invention','resilience',
  '______ is a biased source','solidarity','indigenous (we lived there 3400 y. ago)','tolerance','2 state solution',
  'threatens israeli sovereignty','freedom','terrorist','its good apartheid','prosperity',
  'hamas','multicultural','alliance','diaspora','Zionism',
  'we investigated ourselves & found no evidence','trust bibi, no coi ;)','not a genocide','arabs did ____','arabs, not palestinians'
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
