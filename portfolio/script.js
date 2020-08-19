document.addEventListener('scroll', hideHeader);

function hideHeader() {
    document.querySelector('header').style.top = '-55px';

    console.log('scroll');

    setTimeout(showHeader, 1000);

    
}

function showHeader() {
    //document.querySelector('header').style.display = 'block';
    document.querySelector('header').style.top = '0px';

    console.log('scroll2');
}

