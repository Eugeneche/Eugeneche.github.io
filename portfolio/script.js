document.addEventListener('scroll', hideHeader);

function hideHeader() {
    document.querySelector('header').style.display = 'none';

    console.log('scroll');

    setTimeout(showHeader, 1000);

    
}

function showHeader() {
    document.querySelector('header').style.display = 'block';

    console.log('scroll2');
}

