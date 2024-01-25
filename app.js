// set initial count
let count = 0;

// select values and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
            value.textContent = count;
        }else if(styles.contains('reset')){
            count = 0;
            value.textContent = count;
        } else {
            count++;
            value.textContent = count;
        }

        if(count>0){
            value.style.color = 'green';
        } else if (count < 0){
            value.style.color = 'red';
        } else if (count === 0){
            value.style.color = 'gray';
        }
    })
});