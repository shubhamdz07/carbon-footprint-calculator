function calculateCarbon() {
  const car = parseFloat(document.getElementById('car').value || 0);
  const electricity = parseFloat(document.getElementById('electricity').value || 0);
  const waste = parseFloat(document.getElementById('waste').value || 0);
  const flights = parseFloat(document.getElementById('flights').value || 0);

  const carEmission = car * 4 * 0.21;
  const elecEmission = electricity * 0.5;
  const wasteEmission = waste * 4 * 0.18;
  const flightEmission = (flights * 250) / 12;

  const total = carEmission + elecEmission + wasteEmission + flightEmission;
  const trees = Math.ceil(total / 21);

  document.getElementById('treeInfo').innerHTML = `🌿 Total CO₂: <strong>${total.toFixed(2)} kg/month</strong><br>🌳 Trees needed to offset: <strong>${trees}</strong>`;

  const pos = Math.min(100, (total / 5000) * 100);
  document.getElementById('indicator').style.left = `${pos}%`;

  const quotes = [
    "The Earth is what we all have in common. – Wendell Berry",
    "He who plants a tree, plants hope.",
    "A tree is known by its fruit.",
    "Act as if what you do makes a difference. It does.",
    "Live simply so others may simply live."
  ];
  document.getElementById('quoteBox').innerText = quotes[Math.floor(Math.random() * quotes.length)];

  drawTrees(trees);
}

function drawTrees(count) {
  const canvas = document.getElementById('treeCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = 300;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < count && i < 60; i++) {
    const x = (i * 60) % canvas.width;
    const y = 200 + Math.random() * 50;
    drawTree(ctx, x, y);
  }
}

function drawTree(ctx, x, y) {
  ctx.fillStyle = '#6d4c41';
  ctx.fillRect(x + 10, y, 10, 40);
  ctx.beginPath();
  ctx.arc(x + 15, y, 25, 0, Math.PI * 2);
  ctx.fillStyle = '#4caf50';
  ctx.fill();
}
