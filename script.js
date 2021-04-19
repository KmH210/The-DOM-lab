const btns = document.querySelectorAll('#total-snacks .snacks');
const total =document.getElementById('#total-snacks');
let newTotal=0;
console.log(btns);
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
    const itemCost = Number(btn.getAttribute('data-snack-price'));
    newTotal += itemCost;
    total.innerText = `Total: $${newTotal}`;
})
    });
