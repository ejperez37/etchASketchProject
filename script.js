function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.width = `${960 / size}px`;
      gridItem.style.height = `${960 / size}px`;
      gridItem.style.backgroundColor = 'black';
      gridItem.addEventListener('mouseover', handleMouseOver);
      container.appendChild(gridItem);
    }
  }
  
  function handleMouseOver(e) {
    const currentColor = e.target.style.backgroundColor;
    if (currentColor === 'black') {
      e.target.style.backgroundColor = getRandomRGB();
    } else {
      e.target.style.backgroundColor = addBlack(currentColor, 0.1);
    }
  }
  
  function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  function addBlack(rgb, percentage) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    const newR = Math.floor(r - r * percentage);
    const newG = Math.floor(g - g * percentage);
    const newB = Math.floor(b - b * percentage);
    return `rgb(${newR}, ${newG}, ${newB})`;
  }
  
  document.getElementById('new-grid-btn').addEventListener('click', () => {
    const gridSize = parseInt(prompt('Enter the number of squares per side (max 100):'));
    if (gridSize && gridSize <= 100) {
      createGrid(gridSize);
    } else {
      alert('Invalid input. Please enter a number between 1 and 100.');
    }
  });
  
  createGrid(16);
  