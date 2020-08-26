document.addEventListener('scroll', hideHeader);

function hideHeader() {
    document.querySelector('header').style.top = '-55px';
    setTimeout(showHeader, 1000); 
}

function showHeader() {
    document.querySelector('header').style.top = '0px';
}

let works = document.querySelectorAll('.work-block');

function selectWorks(type) {
    works.forEach(node => {
        return node.classList.contains(type) || node.classList.add('hidden');        
    });
}

function canselHiddenStyle() {
    works.forEach(node => {
        node.classList.contains('hidden') && node.classList.remove('hidden');      
    });
}

function showShowAll() {
    let showAll = document.querySelector('li.show-all');
    showAll.classList.contains('hidden')
        && showAll.classList.remove('hidden');
}

function hideShowAll(e) {
    let showAll = document.querySelector('li.show-all');
    showAll.classList.add('hidden');
    canselHiddenStyle();
    e.stopImmediatePropagation();
}

document.querySelector('.left-section').addEventListener('click', e => {  
    canselHiddenStyle();
    showShowAll();
    e.target.hasAttribute('name') && selectWorks(e.target.getAttribute('name'));
});

document.querySelector('li.show-all').addEventListener('click', hideShowAll);

/* -----------mobile menu ---------------- */

/* document.querySelector('.show-menu').addEventListener('touchstart', () => {
    document.querySelector('.mobile-nav').classList.add('mob-active');
    document.querySelector('.shadow').classList.add('md-show');
});

function closeMenu() {
    document.querySelector('.mobile-nav').classList.remove('mob-active');
    document.querySelector('.shadow').classList.remove('md-show');
}

document.querySelector('.mobile-nav-close').addEventListener('touchstart', closeMenu); */