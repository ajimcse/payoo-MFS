// console.log('homne addd');

document.getElementById('addmoney-btn')
.addEventListener('click', function(event){
   event.preventDefault()
    
   const addMoney=document.getElementById('input-add-money').value;
   console.log(addMoney);

   const pinNumber=document.getElementById('btn-pin').value;
   console.log(pinNumber);
  

})

