function makeFullCircleFirework(fire) {
    let color = randColor();
    let velocity = Math.random() * 8 + 8;
    let max = fireNumber * 3;

    for (let i = 0; i < max; i++) {
        let rad = (i * Math.PI * 2) / max;
        let firework = {
            x: fire.x,
            y: fire.y,
            size: Math.random() + 1.5,
            fill: color,
            vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
            vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
            ay: 0.06,
            alpha: 1, 
            life: Math.round((Math.random() * range) / 2) + range / 1.5
        };

        fireworks.push(firework);
    }
}