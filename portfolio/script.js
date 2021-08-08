document.addEventListener('scroll', hideHeader);

function hideHeader() {
    document.querySelector('header').style.top = '-55px';
    setTimeout(showHeader, 1000); 
}

function showHeader() {
    document.querySelector('header').style.top = '0px';
}

/* -----------main menu ---------------- */

let works = document.querySelectorAll('.for-hiding');

function selectWorks(type) {
    works.forEach(node => {
        return node.classList.contains(type) || node.classList.add('hidden');        
    });
    closeMenu();
}

function cancelHiddenStyle() {
    works.forEach(node => {
        node.classList.contains('hidden') && node.classList.remove('hidden');      
    });
}

function showShowAll() {
    let allShowAll = document.querySelectorAll('li.show-all');
    allShowAll.forEach(el => {
        el.classList.contains('hidden')
        && el.classList.remove('hidden');
    });
}

function hideShowAll(e) {
    let allShowAll = document.querySelectorAll('li.show-all');
    allShowAll.forEach(el => {
        el.classList.add('hidden');
        cancelHiddenStyle();
        cancelActiveStyle();
        e.stopPropagation();
        closeMenu();       
    });
}

let menuItems = document.querySelectorAll('.left-section li');

function addActiveStyle(e) {
    e.target.classList.add('active');
}

function cancelActiveStyle() {
    menuItems.forEach(el => {
        el.classList.contains('active') && el.classList.remove('active');
    });
}

let menus = document.querySelectorAll('.left-section');

menus.forEach(menu => {
    menu.addEventListener('click', e => {
        e.stopPropagation();
        if(e.target.classList.contains('mob-active') || e.target.classList.contains('mobile-nav-close')) {
            closeMenu();
        } else {
            cancelHiddenStyle();
            cancelActiveStyle();       
            showShowAll();        
            e.target.hasAttribute('class') && selectWorks(e.target.getAttribute('class'));
            addActiveStyle(e);
        }       
    });
});

let allShowAll = document.querySelectorAll('li.show-all');
    allShowAll.forEach(el => {
        el.addEventListener('click', hideShowAll);
});
/* -----------mobile menu ---------------- */

document.querySelector('.show-menu').addEventListener('touchstart', () => {
    setTimeout( () => {
        document.querySelector('.mobile-nav').classList.add('mob-active');  
    }, 250);
    document.querySelector('.shadow').classList.remove('hidden');
    
});

function closeMenu() {
    document.querySelector('.mobile-nav').classList.remove('mob-active');
    document.querySelector('.shadow').classList.add('hidden');
}