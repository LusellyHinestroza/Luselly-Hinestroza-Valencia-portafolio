let mostrar = document.querySelectorAll(".informacioCards");

mostrar.forEach(function(mostra){
    mostra.addEventListener("click", function(){
         if (this.style.boxShadow) {
            this.style.boxShadow = "";
            this.style.border = "";
            this.style.backgroundColor = "";
        } else {
            this.style.boxShadow = "0px 0px 5px #8d3dcf";
            this.style.border = "0.1px solid #7942b0d7;";
            this.style.backgroundColor = "#230d3ad7";

        }


        // Buscar la card actual
        let card = mostra.closest(".cardEstudios");

        // Buscar SOLO la .abilidad dentro de esa card
        let subir = card.querySelector(".abilidad");
        

        // Activar clase
        subir.classList.toggle("active");
    });
});

//lo manda a la url
function irEnlaces(url){
    window.open(url, "_blank")
}


/*AGREGAR IMFORMACION .........................................................................*/

/*ESTUDIOS...................................................*/

document.addEventListener("DOMContentLoaded", () => {
   
    const cajonEstudios = document.querySelector(".cajonEstudios");
    let datEstudios = JSON.parse(localStorage.getItem("ListaEstudios")) || [];

    datEstudios.forEach(estudio => {
        cajonEstudios.appendChild(crearEstudios(estudio));
    });


});

function crearEstudios(estudio) {

    const cajonEstudi = document.createElement("div");
    cajonEstudi.classList.add("estidio");

    cajonEstudi.innerHTML = `
        <h3>${estudio.nombreEstudio}</h3>
        <h2>${estudio.nombreProfecion}</h2>
        <p>${estudio.descripcionEstudios}</p>
        <button onclick="irEnlaces('${estudio.paginaEstudios}')">
            Más información
        </button>
    `;

    return cajonEstudi;
}





/*EXPERIENCIAS.....................................................................................................*/

document.addEventListener("DOMContentLoaded", () => {
    const cajonExperiencia = document.querySelector(".cajonExperiencia");

    let datExperiencia = JSON.parse(localStorage.getItem("ListaExperiencia")) || [];

    datExperiencia.forEach(experiencia => {
        cajonExperiencia.appendChild(crearExperiencia(experiencia));
    });
      
});
 


function crearExperiencia(experiencia) {

    const cajonExperienci = document.createElement("div");
    cajonExperienci.classList.add("experiencia");

    cajonExperienci.innerHTML = `
        <h3>${experiencia.nombreExperiencia}</h3>
        <h2>${experiencia.nombreCargo}</h2>
        <p>${experiencia.descripcionExperiencia}</p>
    `;


    return cajonExperienci;
}




/*EXPERIENCIAS.....................................................................................................*/

document.addEventListener("DOMContentLoaded", () => {
    const cajonAbilidades = document.querySelector(".cajonAbilidades");

    let datAbilidades = JSON.parse(localStorage.getItem("ListaHabilidad")) || [];

    datAbilidades.forEach(abilidades => {
        cajonAbilidades.appendChild(crearHabilidad(abilidades));
    });
      
});
 

function crearHabilidad(abilidades) {
    const cajonabilidad = document.createElement("div");
    cajonabilidad.classList.add("habilidad");

    cajonabilidad.innerHTML = `
        <div class="abilidad">
            <div class="imagen">
                <img src="${abilidades.imagenHabilidad}" alt="imagen">
            </div>
            <div class="linea"></div>
            <div class="texto">
                <p>${abilidades.nombreHabilidad}</p>
            </div>
        </div>
        <div class="informacio" id="informacio">
            <p>${abilidades.descripcionHabilidad}</p>
        </div>
    `;

    return cajonabilidad;
}










/*FONDO ANIMADO*/
document.addEventListener("DOMContentLoaded", () => {

    function createPlexus(canvas, options = {}) {

        if (!canvas) {
            console.error("Canvas no encontrado");
            return;
        }

        const ctx = canvas.getContext('2d');

        const cfg = {
            nodeCount: options.nodeCount ?? 55,
            maxDist: options.maxDist ?? 160,
            triDist: options.triDist ?? 110,
            nodeRadius: options.nodeRadius ?? 2.2,
            speed: options.speed ?? 0.35,
            lineAlpha: options.lineAlpha ?? 0.35,
            triAlpha: options.triAlpha ?? 0.10,
            nodeAlpha: options.nodeAlpha ?? 0.90,
            primaryColor: options.primaryColor ?? [230, 0, 130],
            accentColor: options.accentColor ?? [180, 0, 200],
        };

        let W, H, nodes;

        function resize() {
            const dpr = window.devicePixelRatio || 1;

            W = canvas.offsetWidth;
            H = canvas.offsetHeight;

            if (W === 0 || H === 0) return;

            canvas.width = W * dpr;
            canvas.height = H * dpr;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function rand(a, b) {
            return a + Math.random() * (b - a);
        }

        function initNodes() {
            nodes = [];

            const clusters = [
                {
                    cx: W * 0.5,
                    cy: H * 0.20,
                    r: H * 0.20,
                    n: Math.round(cfg.nodeCount * 0.35)
                },
                {
                    cx: W * 0.5,
                    cy: H * 0.60,
                    r: H * 0.24,
                    n: Math.round(cfg.nodeCount * 0.40)
                },
                {
                    cx: W * 0.5,
                    cy: H * 0.85,
                    r: H * 0.14,
                    n: Math.round(cfg.nodeCount * 0.25)
                }
            ];

            clusters.forEach(cl => {
                for (let i = 0; i < cl.n; i++) {

                    const a = Math.random() * Math.PI * 2;
                    const d = Math.random() * cl.r;

                    nodes.push({
                        x: cl.cx + Math.cos(a) * d,
                        y: cl.cy + Math.sin(a) * d,
                        vx: rand(-cfg.speed, cfg.speed),
                        vy: rand(-cfg.speed, cfg.speed),
                        r: rand(cfg.nodeRadius * 0.5, cfg.nodeRadius * 1.6)
                    });
                }
            });
        }

        function lerp(c1, c2, t) {
            return [
                Math.round(c1[0] + (c2[0] - c1[0]) * t),
                Math.round(c1[1] + (c2[1] - c1[1]) * t),
                Math.round(c1[2] + (c2[2] - c1[2]) * t)
            ];
        }

        function rgba(c, a) {
            return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
        }

        function draw() {

            ctx.clearRect(0, 0, W, H);

            const n = nodes;

            for (let i = 0; i < n.length - 2; i++) {

                for (let j = i + 1; j < n.length - 1; j++) {

                    const dij = Math.hypot(
                        n[i].x - n[j].x,
                        n[i].y - n[j].y
                    );

                    if (dij > cfg.triDist) continue;

                    for (let k = j + 1; k < n.length; k++) {

                        const dik = Math.hypot(
                            n[i].x - n[k].x,
                            n[i].y - n[k].y
                        );

                        const djk = Math.hypot(
                            n[j].x - n[k].x,
                            n[j].y - n[k].y
                        );

                        if (dik > cfg.triDist || djk > cfg.triDist) continue;

                        const strength =
                            1 - (dij + dik + djk) / (cfg.triDist * 3);

                        const t =
                            (n[i].x + n[j].x + n[k].x) / 3 / W;

                        const col =
                            lerp(cfg.primaryColor, cfg.accentColor, t);

                        ctx.beginPath();
                        ctx.moveTo(n[i].x, n[i].y);
                        ctx.lineTo(n[j].x, n[j].y);
                        ctx.lineTo(n[k].x, n[k].y);
                        ctx.closePath();

                        ctx.fillStyle =
                            rgba(col, cfg.triAlpha * strength * 1.8);

                        ctx.fill();
                    }
                }
            }

            for (let i = 0; i < n.length - 1; i++) {

                for (let j = i + 1; j < n.length; j++) {

                    const d = Math.hypot(
                        n[i].x - n[j].x,
                        n[i].y - n[j].y
                    );

                    if (d > cfg.maxDist) continue;

                    const alpha =
                        cfg.lineAlpha * (1 - d / cfg.maxDist);

                    const t =
                        (n[i].x + n[j].x) / 2 / W;

                    const col =
                        lerp(cfg.primaryColor, cfg.accentColor, t);

                    ctx.beginPath();
                    ctx.moveTo(n[i].x, n[i].y);
                    ctx.lineTo(n[j].x, n[j].y);

                    ctx.strokeStyle = rgba(col, alpha);
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }

            n.forEach(node => {

                const t = node.x / W;

                const col =
                    lerp(cfg.primaryColor, cfg.accentColor, t);

                const grd = ctx.createRadialGradient(
                    node.x,
                    node.y,
                    0,
                    node.x,
                    node.y,
                    node.r * 4
                );

                grd.addColorStop(0, rgba(col, 0.25));
                grd.addColorStop(1, rgba(col, 0));

                ctx.beginPath();
                ctx.arc(
                    node.x,
                    node.y,
                    node.r * 4,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = grd;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(
                    node.x,
                    node.y,
                    node.r,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    `rgba(255,255,255,${cfg.nodeAlpha})`;

                ctx.fill();
            });
        }

        function update() {
            nodes.forEach(node => {

                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > W) {
                    node.vx *= -1;
                }

                if (node.y < 0 || node.y > H) {
                    node.vy *= -1;
                }
            });
        }

        let raf;

        function loop() {
            update();
            draw();
            raf = requestAnimationFrame(loop);
        }

        function init() {

            resize();

            if (W === 0 || H === 0) return;

            initNodes();

            if (raf) {
                cancelAnimationFrame(raf);
            }

            loop();
        }

        if (canvas.parentElement) {
            new ResizeObserver(() => {
                init();
            }).observe(canvas.parentElement);
        }

        init();
    }

    const canvasLeft = document.getElementById("canvasLeft");
    const canvasRight = document.getElementById("canvasRight");

    console.log("canvasLeft:", canvasLeft);
    console.log("canvasRight:", canvasRight);

    if (canvasLeft) {
        createPlexus(canvasLeft, {
            nodeCount: 60,
            maxDist: 165,
            triDist: 115,
            primaryColor: [141, 61, 207],
            accentColor: [36, 15, 54],
            nodeAlpha: 0.90,
        });
    }

    if (canvasRight) {
        createPlexus(canvasRight, {
            nodeCount: 60,
            maxDist: 165,
            triDist: 115,
            primaryColor: [189, 141, 228],
            accentColor: [141, 61, 207],
            nodeAlpha: 0.90,
        });
    }

});