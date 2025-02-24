// Optional: You can add more fallen leaves dynamically
for (let i = 0; i < 30; i++) {
  createFallenLeaf();
}

function createFallenLeaf() {
  const fallenLeaf = document.createElement('div');
  fallenLeaf.innerHTML = '🍂';
  fallenLeaf.classList.add('fallen-leaf');
  fallenLeaf.style.left = `${Math.random() * 100}%`;
  fallenLeaf.style.animationDuration = `${Math.random() * 30 + 2}s`;
  document.querySelector('.fallen-leaves').appendChild(fallenLeaf);
}
