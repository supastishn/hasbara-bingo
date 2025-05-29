// Column ranges for B,I,N,G,O
const COLUMN_RANGES = [
  { label: 'B', min: 1,  max: 15 },
  { label: 'I', min: 16, max: 30 },
  { label: 'N', min: 31, max: 45 },
  { label: 'G', min: 46, max: 60 },
  { label: 'O', min: 61, max: 75 }
];

function generateBingoCard() {
  const container = document.getElementById('bingoCard');
  container.innerHTML = ''; // clear old

  // Create header row
  COLUMN_RANGES.forEach(col => {
    const header = document.createElement('div');
    header.className = 'bingo-cell';
    header.textContent = col.label;
    container.appendChild(header);
  });

  // Generate numbers per column
  const columns = COLUMN_RANGES.map(col => {
    const nums = [];
    while (nums.length < 5) {
      const n = Math.floor(Math.random() * (col.max - col.min + 1)) + col.min;
      if (!nums.includes(n)) nums.push(n);
    }
    return nums;
  });

  // Build 5×5 grid; center cell is FREE
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const cell = document.createElement('div');
      cell.className = 'bingo-cell';
      if (row === 2 && col === 2) {
        cell.classList.add('free');
        cell.textContent = 'FREE';
      } else {
        cell.textContent = columns[col][row];
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
