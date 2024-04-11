import { useEffect, useRef, useState } from "react";

const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas(); // Set initial size

        window.addEventListener("resize", resizeCanvas);

        class Particle {
            constructor() {
                this.radius = Math.random() * 3;
                this.x =
                    Math.random() * (canvas.width - this.radius * 2) +
                    this.radius;
                this.y =
                    Math.random() * (canvas.height - this.radius * 2) +
                    this.radius;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.color = "#FFB3B3";
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                this.draw();
                this.x += this.speedX;
                this.y += this.speedY;
                this.checkBoundaries();
            }

            checkBoundaries() {
                if (
                    this.x - this.radius <= 0 ||
                    this.x + this.radius >= canvas.width
                ) {
                    this.speedX = -this.speedX;
                }

                if (
                    this.y - this.radius <= 0 ||
                    this.y + this.radius >= canvas.height
                ) {
                    this.speedY = -this.speedY;
                }
            }
        }

        const init = () => {
            const newParticles = [];
            for (let i = 0; i < 100; i++) {
                newParticles.push(new Particle());
            }
            setParticles(newParticles);
        };

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
            });
        };

        init();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} id="particles-canvas" />;
};

export default ParticleCanvas;
