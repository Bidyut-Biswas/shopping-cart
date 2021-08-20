function handleProductQuantity(product,isIncrease){
    const productInput=document.getElementById(product+'-input');
    let productInputNumber=parseInt(productInput.value);
    if(isIncrease){
        productInputNumber++;
    }else{
        if(productInputNumber>0){
            productInputNumber--;
        }
       
    }
    productInput.value=productInputNumber;
    let productPrice=document.getElementById(product+'-price');
    if(product=='phone'){
        productPrice.innerText=productInputNumber*1219;
    }else{
        productPrice.innerText=productInputNumber*59;
    }

    calculation();
};

function calculation(){
    const phoneInput=document.getElementById('phone-input');
    const phoneInputNumber=parseInt(phoneInput.value);

    const caseInput=document.getElementById('case-input');
    const casaeInputNumber=parseInt(caseInput.value);

    let subtotal=document.getElementById('subtotal');  
    subtotal.innerText=phoneInputNumber*1219 +casaeInputNumber*59

    let Tax=document.getElementById('tax'); 
    Tax.innerText=Math.round(subtotal.innerText*0.1);

    const grandTotal=document.getElementById('grand-total');
    
    grandTotal.innerText=Number(subtotal.innerText)+Number(Tax.innerText)
    
}



/* document.getElementById('phone-increase').addEventListener('click',function(){
    const phoneInput=document.getElementById('phone-input');
    let phoneInputNumber=parseInt(phoneInput.value);
    phoneInputNumber++;
    phoneInput.value=phoneInputNumber;
    console.log(phoneInputNumber);
});

document.getElementById('phone-decrese').addEventListener('click',function(){
    const phoneInput=document.getElementById('phone-input');
    let phoneInputNumber=parseInt(phoneInput.value);
    if(phoneInputNumber>0){
        phoneInputNumber--;
    }
    phoneInput.value=phoneInputNumber;
    console.log(phoneInputNumber);
}) */