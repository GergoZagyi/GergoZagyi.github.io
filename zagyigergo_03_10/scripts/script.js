document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Frontend development", "Graphic design", "Datavisualization"];
    const speed = 100; 
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("typewriter").textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.getElementById("typewriter").textContent = "";
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                typeWriter();
            }, 1500); 
        }
    }

    setTimeout(typeWriter, 3000);
});