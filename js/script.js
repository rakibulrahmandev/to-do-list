//? todo list ---------------------------------------------------------------------->

// let's get html element ------------------------------------------->
const inputBox = document.getElementById('input-box');
const addBtn = document.getElementById('btn');
const listContainer = document.getElementById('list-container');

// create event listener -------------------------------------------->
addBtn.addEventListener('click', () => {
    if (getInputValue() === '') {
        alert('Please give valid value.');
        clearInputField();
    };

    if (getInputValue() !== ' ' && getInputValue() !== '') {
        addList(getInputValue());
    };
});

listContainer.addEventListener('click', (e) => {
    let unchecked = e.target.getAttribute('class').includes(`before:bg-[url(./img/unchecked.png)]`);
    let checked = e.target.getAttribute('class').includes(`before:bg-[url(./img/checked.png)]`);

    if (e.target.tagName === 'LI') {
        if (unchecked) {
            e.target.classList.remove(`before:bg-[url(./img/unchecked.png)]`);
            e.target.classList.add(`before:bg-[url(./img/checked.png)]`, `line-through`);
            saveData();
        } else if (checked) {
            e.target.classList.add(`before:bg-[url(./img/unchecked.png)]`);
            e.target.classList.remove(`before:bg-[url(./img/checked.png)]`, `line-through`);
            saveData();
        };
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    };

}, false);

// create functions ------------------------------------------------->
function getInputValue() {
    let getValue = String(inputBox.value).trim();
    return getValue;
};

function clearInputField() {
    return inputBox.value = '';
};

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
};

function getData() {
    listContainer.innerHTML = localStorage.getItem('data');
};

function addList(task) {
    const createListEle = document.createElement('li');
    const createSpanEle = document.createElement('span');
    
    createListEle.classList.add(`select-none`, `cursor-pointer`, `relative`, `pl-9`, `flex`, `items-center`, `justify-between`, `before:content-['']`, `before:absolute`, `before:w-6`, `before:h-6`, `before:bg-cover`, `before:bg-[url(./img/unchecked.png)]`, `before:bg-center`, `before:rounded-[50%]`, `before:left-[0]`, `font-poppins`, `text-[16px]`, `font-medium`, `text-gray-700`);

    createSpanEle.classList.add(`absolute`, `right-0`, `w-[25px]`, `h-[25px]`, `text-gray-950`, `cursor-pointer`, `cursor-pointer`, `hover:bg-gray-200`, `transition-all`, `ease-linear`, `duration-75`, `flex`, `items-center`, `justify-center`, `ri-close-line`, `rounded-full`)

    createListEle.innerHTML = task;

    createListEle.appendChild(createSpanEle);
    listContainer.appendChild(createListEle);

    inputBox.value = '';
    saveData();
};

// functions call here --------------------------------------------->
getData();