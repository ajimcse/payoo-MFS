// console.log('homne addd');

document.getElementById('addmoney-btn')
.addEventListener('click', function(event){
   event.preventDefault()
    
   const addMoney=document.getElementById('input-add-money').value;
   console.log(addMoney);

   const pinNumber=document.getElementById('btn-pin').value;
   console.log(pinNumber);
    
   if(pinNumber ==='123'){
    console.log('adding money to account');

     const currentMoney= document.getElementById('current-money').innerText;
     console.log(currentMoney);

       const addMoneyNumber=parseFloat(addMoney);
       const currentBalance=parseFloat(currentMoney)
       const newBalance= addMoneyNumber +  currentBalance;
       console.log(newBalance);

       document.getElementById('current-money').innerText =newBalance;
       
      

   }
   else{
    alert('Failed to add money Please try again')
   }


})

