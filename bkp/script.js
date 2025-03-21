// Interações com o menu (efeito de transição suave)
const menuLinks = document.querySelectorAll('.menu ul li a');

menuLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});
