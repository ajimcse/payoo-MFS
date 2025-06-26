// console.log('click me ');
document.getElementById('loing-btn').addEventListener('click', function(event){
    event.preventDefault()
    const phoneNumber=document.getElementById('input-number').value
   const pinNumber= document.getElementById('your-pin').value;
//    console.log(phoneNumber, pinNumber);


   if(phoneNumber=== '5' && pinNumber ==='123'){
      console.log('are your sure');
    window.location.href ='/Home.html'
   }
   else{
    alert('this is a wrong number')
   }

})