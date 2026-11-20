
// Skapar en PixiJS-applikation som täcker hela fönstret
const app = new PIXI.Application();

await app.init({
  resizeTo: window,
  backgroundAlpha: 0
});

// Lägger till PixiJS-canvasen på sidan
document.body.appendChild(app.canvas);

// Här ritas alla prickar
const dots = new PIXI.Graphics();
app.stage.addChild(dots);

// Sparar musens position
const mouse = {
  x: -1000,
  y: -1000
};

// Uppdaterar positionen när musen rör sig
window.addEventListener("pointermove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

app.ticker.add(() => {
  dots.clear();

  //Skapar ett rutnät av prickar
  for (let x = 0; x < app.screen.width; x += 35) {
    for (let y = 0; y < app.screen.height; y += 35) {

      //Räknar ut avståndet till muspekaren
      const distance = Math.hypot(
        x - mouse.x,
        y - mouse.y
      );

      //Prickarna växer i närheten av musen
      const size = Math.max(1, 7 - distance / 35);

      dots.circle(x, y, size);
    }
  }
  //  prickarnas färg 
  dots.fill("#777777");
});