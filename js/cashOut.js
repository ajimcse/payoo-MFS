document.getElementById('cashOut-btn').addEventListener('click', function(event){
    event.preventDefault()
    const cashOutMoney=document.getElementById('input-cash-out').value;
    const cashOutBalance=parseFloat(cashOutMoney)
    const cashOutPin=document.getElementById('btn-pin-cash-out').value;
    // console.log(cashOutMoney, cashOutPin);
    if(cashOutPin ==='1234'){
        const currentBalance=document.getElementById('current-money').innerText;
        const cashBalance=parseFloat(currentBalance);

        const newBalance=cashBalance - cashOutBalance;

        document.getElementById('current-money').innerText = newBalance;

    }
    else{
        alert('This is a woring Password')
    }

})