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