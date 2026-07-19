(() => {
    const container = document.getElementById("hero-canvas");
    if (!container) return;

    function createParticleWebSketch() {
        return (p) => {
            const particles = [];
            const particleCount = 140;
            let pointerX = null;
            let pointerY = null;

            function buildParticles() {
                particles.length = 0;
                for (let i = 0; i < particleCount; i += 1) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.35, 0.35),
                        vy: p.random(-0.35, 0.35),
                        size: p.random(1.2, 3.2)
                    });
                }
            }

            function wrapParticle(part) {
                if (part.x < -10) part.x = p.width + 10;
                if (part.x > p.width + 10) part.x = -10;
                if (part.y < -10) part.y = p.height + 10;
                if (part.y > p.height + 10) part.y = -10;
            }

            p.setup = () => {
                const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
                canvas.parent(container);
                buildParticles();
                p.noStroke();
            };

            p.draw = () => {
                p.background(7, 19, 33, 220);

                for (let i = 0; i < particles.length; i += 1) {
                    const part = particles[i];

                    if (pointerX !== null && pointerY !== null) {
                        const dx = pointerX - part.x;
                        const dy = pointerY - part.y;
                        const distSq = dx * dx + dy * dy;
                        const forceRadius = 180;
                        if (distSq > 1 && distSq < forceRadius * forceRadius) {
                            const dist = Math.sqrt(distSq);
                            const factor = (forceRadius - dist) / forceRadius;
                            part.vx -= (dx / dist) * factor * 0.08;
                            part.vy -= (dy / dist) * factor * 0.08;
                        }
                    }

                    part.vx *= 0.985;
                    part.vy *= 0.985;
                    part.x += part.vx;
                    part.y += part.vy;
                    wrapParticle(part);

                    p.fill(255, 255, 255, 145);
                    p.circle(part.x, part.y, part.size);

                    for (let j = i + 1; j < particles.length; j += 1) {
                        const other = particles[j];
                        const d = p.dist(part.x, part.y, other.x, other.y);
                        if (d < 120) {
                            const alpha = p.map(d, 0, 120, 65, 0);
                            p.stroke(125, 208, 255, alpha);
                            p.strokeWeight(1);
                            p.line(part.x, part.y, other.x, other.y);
                            p.noStroke();
                        }
                    }
                }
            };

            p.windowResized = () => {
                p.resizeCanvas(container.offsetWidth, container.offsetHeight);
                buildParticles();
            };

            p.mouseMoved = () => {
                pointerX = p.mouseX;
                pointerY = p.mouseY;
            };

            p.touchStarted = () => {
                if (p.touches.length > 0) {
                    pointerX = p.touches[0].x;
                    pointerY = p.touches[0].y;
                }
            };

            p.touchEnded = () => {
                pointerX = null;
                pointerY = null;
            };

            p.mouseOut = () => {
                pointerX = null;
                pointerY = null;
            };
        };
    }

    container.setAttribute("data-animation", "Particle Web");
    container.setAttribute("data-rarity", "Common");
    new p5(createParticleWebSketch());
})();
