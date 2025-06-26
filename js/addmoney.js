document.getElementById('addmoney-btn').addEventListener('click', function(event){
    event.preventDefault()
    
    const addMoneyInput=document.getElementById('input-add-money').value;
    const addMoney=parseFloat(addMoneyInput)
    const pinNumber=document.getElementById('btn-pin').value;

    // console.log(addMoneyInput, pinNumber);
    if(pinNumber ==='1234'){
         const currentBalance=document.getElementById('current-money').innerText;

        const balanceNumber=parseFloat(currentBalance);
       const newBalance =  balanceNumber  + addMoney;

        document.getElementById('current-money').innerText =newBalance
         


    }
    else{
        alert('Filed to  not woring password ')
    }

})