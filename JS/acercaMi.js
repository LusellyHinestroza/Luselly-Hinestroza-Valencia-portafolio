function irEnlaces(url){
    window.open(url, "_blank")
}

function menuResponse(){
    document.getElementById("menu").classList.toggle("active");
}

/*FONDO.................................................................................. */


function createPlexus(canvas, options = {}) {
            const ctx = canvas.getContext('2d');
            const cfg = {
                nodeCount:    options.nodeCount    ?? 55,
                maxDist:      options.maxDist      ?? 160,
                triDist:      options.triDist      ?? 110,
                nodeRadius:   options.nodeRadius   ?? 2.2,
                speed:        options.speed        ?? 0.35,
                lineAlpha:    options.lineAlpha    ?? 0.35,
                triAlpha:     options.triAlpha     ?? 0.10,
                nodeAlpha:    options.nodeAlpha    ?? 0.90,
                primaryColor: options.primaryColor ?? [230, 0, 130],
                accentColor:  options.accentColor  ?? [180, 0, 200],
            };

            let W, H, nodes;

            function resize() {
                const dpr = window.devicePixelRatio || 1;
                W = canvas.offsetWidth;
                H = canvas.offsetHeight;
                canvas.width  = W * dpr;
                canvas.height = H * dpr;
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }

            function rand(a, b) { return a + Math.random() * (b - a); }

            function initNodes() {
                nodes = [];

                for (let i = 0; i < cfg.nodeCount; i++) {

                    nodes.push({
                        x: Math.random() * W,
                        y: Math.random() * H,

                        vx: rand(-cfg.speed, cfg.speed),
                        vy: rand(-cfg.speed, cfg.speed),

                        r: rand(cfg.nodeRadius * 0.6, cfg.nodeRadius * 1.6),
                    });

                }
           }

            function lerp(c1, c2, t) {
                return [
                    Math.round(c1[0] + (c2[0] - c1[0]) * t),
                    Math.round(c1[1] + (c2[1] - c1[1]) * t),
                    Math.round(c1[2] + (c2[2] - c1[2]) * t),
                ];
            }

            function rgba(c, a) { return `rgba(${c[0]},${c[1]},${c[2]},${a})`; }

            function draw() {
                ctx.clearRect(0, 0, W, H);
                const n = nodes;

                /* Triángulos */
                for (let i = 0; i < n.length - 2; i++) {
                    for (let j = i + 1; j < n.length - 1; j++) {
                        const dij = Math.hypot(n[i].x - n[j].x, n[i].y - n[j].y);
                        if (dij > cfg.triDist) continue;
                        for (let k = j + 1; k < n.length; k++) {
                            const dik = Math.hypot(n[i].x - n[k].x, n[i].y - n[k].y);
                            const djk = Math.hypot(n[j].x - n[k].x, n[j].y - n[k].y);
                            if (dik > cfg.triDist || djk > cfg.triDist) continue;
                            const strength = 1 - (dij + dik + djk) / (cfg.triDist * 3);
                            const t   = (n[i].x + n[j].x + n[k].x) / 3 / W;
                            const col = lerp(cfg.primaryColor, cfg.accentColor, t);
                            ctx.beginPath();
                            ctx.moveTo(n[i].x, n[i].y);
                            ctx.lineTo(n[j].x, n[j].y);
                            ctx.lineTo(n[k].x, n[k].y);
                            ctx.closePath();
                            ctx.fillStyle = rgba(col, cfg.triAlpha * strength * 1.8);
                            ctx.fill();
                        }
                    }
                }

                /* Líneas */
                for (let i = 0; i < n.length - 1; i++) {
                    for (let j = i + 1; j < n.length; j++) {
                        const d = Math.hypot(n[i].x - n[j].x, n[i].y - n[j].y);
                        if (d > cfg.maxDist) continue;
                        const alpha = cfg.lineAlpha * (1 - d / cfg.maxDist);
                        const t   = (n[i].x + n[j].x) / 2 / W;
                        const col = lerp(cfg.primaryColor, cfg.accentColor, t);
                        ctx.beginPath();
                        ctx.moveTo(n[i].x, n[i].y);
                        ctx.lineTo(n[j].x, n[j].y);
                        ctx.strokeStyle = rgba(col, alpha);
                        ctx.lineWidth   = 0.7;
                        ctx.stroke();
                    }
                }

                /* Nodos */
                n.forEach(node => {
                    const t   = node.x / W;
                    const col = lerp(cfg.primaryColor, cfg.accentColor, t);
                    const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 4);
                    grd.addColorStop(0, rgba(col, 0.25));
                    grd.addColorStop(1, rgba(col, 0));
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.r * 4, 0, Math.PI * 2);
                    ctx.fillStyle = grd;
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255,255,255,${cfg.nodeAlpha})`;
                    ctx.fill();
                });
            }

            function update() {
                nodes.forEach(node => {
                    node.x += node.vx;
                    node.y += node.vy;
                    if (node.x < 0 || node.x > W) node.vx *= -1;
                    if (node.y < 0 || node.y > H) node.vy *= -1;
                });
            }

            let raf;
            function loop() { update(); draw(); raf = requestAnimationFrame(loop); }

            function init() {
                resize();
                initNodes();
                if (raf) cancelAnimationFrame(raf);
                loop();
            }

            new ResizeObserver(() => init()).observe(canvas.parentElement);
            init();
        }

createPlexus(document.getElementById('canvasCliente'), {
    nodeCount: 80,
    maxDist: 170,
    triDist: 50,
    primaryColor: [141, 61, 207],
    accentColor: [189, 141, 228]
});

createPlexus(document.getElementById('canvasHtml'), {
    nodeCount: 80,
    maxDist: 170,
    triDist: 50,
    primaryColor: [189, 141, 228],
    accentColor: [141, 61, 207]
});