const counterBox = document.querySelector("#counterBox");
const decreaseBtn = document.querySelector("#decrease_btn");
const resetBtn = document.querySelector("#reset_btn");
const increaseBtn = document.querySelector("#increase_btn");
const allBtn = [decreaseBtn, resetBtn, increaseBtn];

let counter = 0;

allBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnCLass = e.currentTarget.classList;
        if(btnCLass.contains('decrease_btn')){
            counter--
        }else if(btnCLass.contains('reset_btn')){
            counter = 0
        }else{
            counter++
        }
        if(counter > 0){
            document.querySelector("h2").style.color = 'green';
        }else if(counter < 0){
            document.querySelector("h2").style.color = 'red';
        }else{
            document.querySelector("h2").style.color = 'black';
        }

        counterBox.textContent = counter;
    })
})