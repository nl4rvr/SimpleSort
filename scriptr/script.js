let cadrList = ['привет','яблоко','синий','ветер'];

const resulElem = document.querySelector('#result');
const ascSortElem = document.querySelector('.sort .asc');
const descSortElem = document.querySelector('.sort .desc');

function render(list){
    resulElem.innerText = '';
    for (let elem of list){
        const divElem = document.createElement('div');
        divElem.innerText = elem;
        resulElem.appendChild(divElem);
    }
}

document.forms[0].addEventListener('submit', event=>{
    event.preventDefault();
    const value = event.target.title.value;
    if(value !== ''){
        cadrList.push(value);
    }else{
        alert('значение пустое!');
    }
    event.target.title.value = '';
    render(cadrList);
})

document.forms[1].addEventListener('submit', event=>{
    event.preventDefault();
    const value = event.target.title.value;
    const lst = cadrList.filter(elem => elem === value);
    render(lst);
})

ascSortElem.addEventListener('click', event=>{
    cadrList.sort();
    render(cadrList);
});

descSortElem.addEventListener('click', event=>{
    cadrList.sort();
    cadrList.reverse();
    render(cadrList);
});

render(cadrList);