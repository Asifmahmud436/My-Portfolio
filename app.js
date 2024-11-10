document.addEventListener('mousemove', (event) => {
    const circle = document.querySelector('.circle');
    if (circle) {
        circle.style.left = `${event.pageX}px`;
        circle.style.top = `${event.pageY}px`;
        console.log("Mouse moved:", event.pageX, event.pageY); 
    } else {
        console.error("Circle element not found.");
    }
});
