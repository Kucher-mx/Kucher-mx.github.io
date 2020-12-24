const menu = document.querySelector('.menu'),
    overlay = document.querySelector('.menu_overlay'),
    burger = document.querySelector('.hamburger'),
    body = document.querySelector('body'),
    closeEl = document.querySelector('.menu_close'),
    menuElements = document.querySelectorAll('.menu_list li');

const barsPersents = document.querySelectorAll('.persent'),
    bars = document.querySelectorAll('.grid_status_item_front');

    /*policyButton = document.querySelector('.policy_trigger'),
    policy = document.querySelector('.policy'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal_close'),
    modalAgree = document.querySelector('.modal_agree'),
    inputAgree = document.querySelector('#agree_input'),
    statuses = document.querySelectorAll('.persent'),
    frontStatuses = document.querySelectorAll('.grid_status_item_front');*/

burger.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    menu.classList.add('active');
});

menu.addEventListener('click', (e) => {
    if(e.target.matches('.menu_overlay')){
        menu.classList.remove('active');
        body.style.overflow = '';
    }
})

menuElements.forEach((el) => {
    el.addEventListener('click', () => {
        body.style.overflow = '';
        menu.classList.remove('active');
    })
})

closeEl.addEventListener('click', () => {
    menu.classList.remove('active');
    body.style.overflow = '';
});

bars.forEach((bar,i) => {
    bar.style.width = barsPersents[i].innerHTML;
})

// policyButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     body.style.overflow = 'hidden';
//     modal.classList.add('modal_active');
// });

// modal.addEventListener('click', (e) => {
//     if(e.target !== policy){
//         closeModal();
//     }
// });

// modalClose.addEventListener('click', () => {
//     closeModal();
// });   npm install wow.js


// modalAgree.addEventListener('click', () => {
//     closeModal();
//     inputAgree.setAttribute('checked', true);
// });

// const closeModal = () => {
//     body.style.overflow = '';
//     modal.classList.remove('modal_active');
// };

//statuses.forEach((el, idx) => {
//    frontStatuses[idx].style.width = `${el.innerHTML.slice(0, -1)}%`;
//})

new WOW().init();

