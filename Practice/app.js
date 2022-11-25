let i = 0;
let j = 0;

// const buttonForm = document.querySelector('#buttonForm');

// buttonForm.addEventListener('click', function(e) {
//     e.preventDefault();

// })

const a = document.querySelector('#first');
const b = document.querySelector('h2');
const c = document.querySelector('#second');
const d = document.querySelector('#third');

const value_str = document.getElementById('select_value');



a.addEventListener('click', function () {
    if(i !== +value_str.options[value_str.selectedIndex].value && j !== +value_str.options[value_str.selectedIndex].value) {
        b.innerText = `${i+1} to ${j}`;
        i = i+1;
    } else {
        b.innerText = `${i} to ${j}`;
    }
})

c.addEventListener('click', () => {
    if(i !== +value_str.options[value_str.selectedIndex].value && j !== +value_str.options[value_str.selectedIndex].value) {
        b.innerText = `${i} to ${j+1}`;
        j = j+1;
    } else {
        b.innerText = `${i} to ${j}`;
    } 

})

d.addEventListener('click', () => {
    i = 0;
    j = 0;
    b.innerText = "0 to 0";
})

// while(두 점수중 하나라도 === select[1]) {
//     두버튼 다 잠김(눌러도 변화없음);
//     if(왼쪽이 이겼으면) {
//         색깔 바꿔줌(자기색 , 빨간색)
//     } else {
//         색깔바꿔줌
//     }
// }

