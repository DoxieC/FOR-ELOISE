// Get the canvas element and set up the context
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Helper functions for heart shape calculation
function hearta(k) {
    return 15 * Math.sin(k) ** 3;
}

function heartb(k) {
    return 12 * Math.cos(k) - 5 * Math.cos(2 * k) - 2 * Math.cos(3 * k) - Math.cos(4 * k);
}

// Draw heart shape with animation
function drawHeart() {
    let i = 0;
    const scale = 20;

    function animate() {
        // Clear the canvas each frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Move origin to center of canvas
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);

        // Start drawing the heart shape
        ctx.beginPath();
        for (let j = 0; j < i; j++) {
            const x = hearta(j / 100) * scale;
            const y = heartb(j / 100) * scale;
            ctx.lineTo(x, y);
        }

        // Set the line color and draw
        ctx.strokeStyle = "#f73487";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Restore the context to avoid affecting future drawings
        ctx.restore();

        // Increment the drawing step to animate
        i += 5;
        if (i < 1000) {
            requestAnimationFrame(animate);
        }
    }

    animate(); // Start the animation
}

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawHeart(); // Redraw the heart after resizing
});

// Call drawHeart to start
drawHeart();
