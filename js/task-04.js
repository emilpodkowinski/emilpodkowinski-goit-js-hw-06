let counterValue = 0;

function increment(){
 counterValue += 1;
}

function decrement(){
 counterValue -= 1;
}



const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");

btnDecrement.addEventListener("click",() => {
  decrement();
  value.innerHTML = counterValue;
});

btnIncrement.addEventListener("click",() => {
  increment();
  value.innerHTML = counterValue;
});

