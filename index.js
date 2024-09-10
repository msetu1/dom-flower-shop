let total=0;
function handleCLikBtn(data){
    const selectedItems =document.getElementById('selected-items');
    const count =selectedItems.childElementCount;
const itemsName=data.parentNode.childNodes[1].innerText;
const li =document.createElement("p");
li.style.fontSize='17px'
li.innerText=`${count+1} ${itemsName}`;
selectedItems.appendChild(li);

// price
const price=data.parentNode.childNodes[5].innerText.split(' ')[1];
total=parseInt(total)+parseInt(price);
document.getElementById('total').innerText=total;

setField()
}
function setField(){
    if(total>100){
        const discount =total*0.2;
        const grandTotal =document.getElementById('grand-total');
        grandTotal.innerText=(total-discount).toFixed(2);


        const discountField =document.getElementById('discount');
        discountField.innerText=discount.toFixed(2);
    }
    else{
       return total
    }
}
