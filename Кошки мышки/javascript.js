let cat = document.getElementById ('cat');
cat.style.position ='fixed';
document.onmousemove = (event) => {
    cat.style.left = event.clientX - 75 + 'px';
    cat.style.top = event.clientY - 75 + 'px';
}
cat.onmouseover = () => alert('Mouse in a trap!');