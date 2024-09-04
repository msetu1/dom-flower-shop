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
}
