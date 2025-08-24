const img = document.getElementById('tiltImg');
const parent = img.parentElement;

parent.addEventListener('mousemove', (e) => {
 const rect = parent.getBoundingClientRect();
 const x = e.clientX - rect.left;
 const y = e.clientY - rect.top;

 const centerX = rect.width / 2;
 const centerY = rect.height / 2;

 const rotateX = ((y - centerY) / centerY) * 10;
 const rotateY = ((x - centerX) / centerX) * 10;

 img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

parent.addEventListener('mouseleave', () => {
 img.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

console.log(window.innerWidth);