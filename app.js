
//lo manda a la url
function irEnlaces(url){
    window.open(url, "_blank")
}

function menuResponse(){
    document.getElementById("menu").classList.toggle("active");
}





/*fodo..................................................................................


const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

/* resize

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();

window.addEventListener('resize', () => {
  resize();
  initStars();
});

/* capas 

const LAYERS = [

  {
    count:320,
    speedMul:0.015,
    minR:0.3,
    maxR:1.0,
    twinkleSpeed:0.008,
    alpha:0.55
  },

  {
    count:180,
    speedMul:0.030,
    minR:0.5,
    maxR:1.3,
    twinkleSpeed:0.012,
    alpha:0.75
  },

  {
    count:70,
    speedMul:0.055,
    minR:1.0,
    maxR:2.2,
    twinkleSpeed:0.018,
    alpha:1
  }

];

let stars = [];

/* random 

function rand(min,max){
  return min + Math.random() * (max - min);
}

/* crear estrella 

function makeStar(layer){

  return {

    ox:rand(0, canvas.width),
    oy:rand(0, canvas.height),

    r:rand(layer.minR, layer.maxR),

    ampX:rand(8,28) * layer.speedMul * 18,
    ampY:rand(8,28) * layer.speedMul * 18,

    freqX:rand(0.00012,0.00030),
    freqY:rand(0.00009,0.00025),

    phaseX:rand(0, Math.PI * 2),
    phaseY:rand(0, Math.PI * 2),

    twinklePhase:rand(0, Math.PI * 2),
    twinkleSpeed:layer.twinkleSpeed * rand(0.6,1.4),

    baseAlpha:layer.alpha,

    layer,

    hue:
      Math.random() < 0.15
      ? (Math.random() < 0.5 ? 210 : 40)
      : 0,

    sat:
      Math.random() < 0.15
      ? rand(20,50)
      : 0

  };

}

/* iniciar estrellas 

function initStars(){

  stars = [];

  LAYERS.forEach(layer => {

    for(let i = 0; i < layer.count; i++){

      stars.push(makeStar(layer));

    }

  });

}

initStars();

/* estrellas fugaces

let shooters = [];

function spawnShooter(){

  const angle = rand(Math.PI * 10.1, Math.PI * 10.45);

  const speed = rand(7,12);

  shooters.push({

    x:rand(0, canvas.width * 0.8),
    y:rand(0, canvas.height * 0.4),

    vx:Math.cos(angle) * speed,
    vy:Math.sin(angle) * speed,

    len:rand(80,180),

    alpha:1,

    fade:rand(0.012,0.022)

  });

}

function scheduleShooter(){

  spawnShooter();

  setTimeout(
    scheduleShooter,
    rand(3000,7000)
  );

}

setTimeout(
  scheduleShooter,
  rand(1500,3000)
);

/* animación 

function draw(){

  /* fondo 

  const bg = ctx.createRadialGradient(

    canvas.width * 0.5,
    canvas.height * 0.25,
    0,

    canvas.width * 0.5,
    canvas.height * 0.25,
    canvas.width * 0.8

  );

  bg.addColorStop(0,'#000000');
  

  ctx.fillStyle = bg;

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  const now = performance.now();

  /* scroll 

  const scrollY = window.scrollY;

  /* estrellas 

  stars.forEach(s => {

    const depth = 2 + s.layer.speedMul * 20;

    const x =

      s.ox +

      Math.sin(
        now * s.freqX + s.phaseX
      ) * s.ampX;

    const y =

      (
        s.oy +

        Math.sin(
          now * s.freqY + s.phaseY
        ) * s.ampY +

        scrollY * depth

      ) % (canvas.height + 100);

    /* brillo 

    s.twinklePhase += s.twinkleSpeed;

    const twinkle =

      0.85 +

      0.65 *

      Math.sin(s.twinklePhase);

    const alpha =

      s.baseAlpha * twinkle;

    ctx.save();

    /* glow 

    if(s.r > 1){

      const glow = ctx.createRadialGradient(

        x,
        y,
        0,

        x,
        y,
        s.r * 5

      );

      glow.addColorStop(
        0,
        `rgba(255,255,255,${alpha * 0.35})`
      );

      glow.addColorStop(
        1,
        'rgba(154, 155, 162, 0)'
      );

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        s.r * 5,
        0,
        Math.PI * 2
      );

      ctx.fill();

    }

    /* estrella 

    ctx.fillStyle =

      s.hue !== 0

      ? `hsla(${s.hue}, ${s.sat}%, 85%, ${alpha})`

      : `rgba(255,255,255,${alpha})`;

    ctx.beginPath();

    ctx.arc(

      x,
      y,

      s.r * (0.10 + depth * 0.7),

      0,
      Math.PI * 2

    );

    ctx.fill();

    ctx.restore();

  });

  /* fugaces 

  shooters = shooters.filter(
    sh => sh.alpha > 0
  );

  shooters.forEach(sh => {

    ctx.save();

    const grad = ctx.createLinearGradient(

      sh.x - sh.vx * (sh.len / 10),
      sh.y - sh.vy * (sh.len / 10),

      sh.x,
      sh.y

    );

    grad.addColorStop(
      0,
      'rgba(246, 239, 239, 0)'
    );

    grad.addColorStop(
      1,
      `rgba(255,255,255,${sh.alpha})`
    );

    ctx.strokeStyle = grad;

    ctx.lineWidth = 1.4;

    ctx.beginPath();

    ctx.moveTo(

      sh.x - sh.vx * (sh.len / 10),
      sh.y - sh.vy * (sh.len / 10)

    );

    ctx.lineTo(
      sh.x,
      sh.y
    );

    ctx.stroke();

    ctx.restore();

    sh.x += sh.vx;
    sh.y += sh.vy;

    sh.alpha -= sh.fade;

  });

  requestAnimationFrame(draw);

}

draw();

*/


const navbar = `

            <header>
                <div class="areglosnav">
                    <div class="menu-resP" onclick="menuResponse()">☰</div>
                    <nav class="menu" id="menu">
                        <a href="../index.html"><img src="/imagenes/inicio.png" alt="inicio">Inicio</a>
                        <!-- BOTON -->
                        <div class="contenedorPortafolio">

                            <a class="itemMenu" href="../html/portafolio.html">  
                                <img src="./imagenes/portafolio.png" alt="portafolio">
                                Portafolio
                            </a>

                            <!-- MENU -->
                            <iframe
                                id="menuFrame"
                                src="/html/menuSeugundario.html">
                            </iframe>

                        </div>
                        <a href="/html/acercaMi.html"><img src="./imagenes/acercademi.png" alt="acercaDeMi">Acerca de mi</a>
                        <a href="/html/publicaciones.html"><img src="./imagenes/publicaciones.png" alt="cv">Publicaciones</a>
                        <a  href="/html/cv.html"><img src="./imagenes/cv.png" alt="cv">Secion de CV</a>
                    </nav>
                    <div class="cvlogo">
                        <a href="./imagenes/Desarrolladora Junior Full-Stack.docx (1).pdf" download class="btn-cv">Descargar CV</a>
                        <p class="nombre">Luselly Hinestroza Valencia</p>
                    </div>
                </div> 
            </header>

`;
document.getElementById("navbar-container").innerHTML = navbar;


function menuResponse(){
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("menu-resP").classList.toggle("active");
}

function irEnlaces(url){
    window.open(url, "_blank")
}
