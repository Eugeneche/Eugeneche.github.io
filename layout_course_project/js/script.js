/* ---------- product slider ------------ */

let minImages = document.querySelectorAll('.goods-min');

for(let i = 0; i < minImages.length; i++) {
    minImages[i].parentElement.onclick = function() {
        for(let i = 0; i < minImages.length; i++) {
            minImages[i].parentElement.classList.remove('active');
        }        
        minImages[i].parentElement.classList.add('active');
        document.getElementById('goods-max').src = `${minImages[i].src}`;
    }
}

/* -----------mobile menu ---------------- */

document.querySelector('.show-menu').addEventListener('touchstart', () => {
    document.querySelector('.mobile-nav').classList.add('mob-active');
    document.querySelector('.shadow').classList.add('md-show');
});

function closeMenu() {
    document.querySelector('.mobile-nav').classList.remove('mob-active');
    document.querySelector('.shadow').classList.remove('md-show');
}

document.querySelector('.mobile-nav-close').addEventListener('touchstart', closeMenu);