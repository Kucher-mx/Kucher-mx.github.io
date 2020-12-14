const menu = document.querySelector('.menu'),
    burger = document.querySelector('.hamburger'),
    closeEl = document.querySelector('.menu_close'),
    policyButton = document.querySelector('.policy_trigger'),
    policy = document.querySelector('.policy'),
    modal = document.querySelector('.modal'),
    body = document.querySelector('body'),
    modalClose = document.querySelector('.modal_close'),
    modalAgree = document.querySelector('.modal_agree'),
    inputAgree = document.querySelector('#agree_input'),
    statuses = document.querySelectorAll('.persent'),
    frontStatuses = document.querySelectorAll('.grid_status_item_front');


burger.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    menu.classList.toggle('active');
});

closeEl.addEventListener('click', () => {
    menu.classList.remove('active');
    body.style.overflow = '';
});

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
// });

// modalAgree.addEventListener('click', () => {
//     closeModal();
//     inputAgree.setAttribute('checked', true);
// });

// const closeModal = () => {
//     body.style.overflow = '';
//     modal.classList.remove('modal_active');
// };

statuses.forEach((el, idx) => {
    frontStatuses[idx].style.width = `${el.innerHTML.slice(0, -1)}%`;
})
