const button = document.querySelector('#togglelist')
const list = document.querySelector('#Second ul')

list.style.display = 'none';

button.addEventListener('click', () => {
    if (list.style.display === 'none'){
        list.style.display = 'block';
    } 
    else {
        list.style.display = 'none';
    }
});
