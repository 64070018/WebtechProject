let Item = document.querySelector('.item');


let carts = JSON.parse(localStorage.getItem("CART")) || [];
// function disData(){
//     console.log(localStorage.getItem("CART"));
//     renderCartItems();
// }
// disData();
updateCart();


function addCart(id){
    if(carts.some((item) => item.id == id)){
        // cartss.forEach((item) =>{
        //     console.log(item.id);
        // })
    }
    else{
        const item = products.find((product) => product.id == id)
        carts.push({
            ...item,
            numberOfUnits : 1,
        });
    }
   cart.classList.add("active");
    updateCart();
}

function updateCart(){
    renderCartItems();
    // renderSubtotal();
    localStorage.setItem("CART", JSON.stringify(carts));
}

function renderCartItems(){
    Item.innerHTML = "";
//     var Vanila = document.querySelector('#Vanila').checked;
// var Charcoal = document.querySelector('#Charcoal').checked;
// var TwoTone = document.querySelector('#TwoTone').checked;
    
        carts.forEach((item) => {
            // if(Vanila){
            //     Item.innerHTML += `
            //     <div class="cart-item">
            //     <div class="item-info">
            //         <img src="${item.img}" alt="" class="product-img">
            //         <h4>${item.menu}</h4>
            //     </div>
            //     <div class="unit-price">
            //         ${item.price} baht
            //     </div>
            //     <div class="flour1">
            //         แป้ง : ${item.Vanila}
            //     </div>
            //     <div class="units">
            //         <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            //         <div class="number">${item.numberOfUnits}</div>
            //         <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
            //     </div>
            //     <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.id})"></div>
            // </div>
            //     `
            // }
            // else if(Charcoal){
            //     Item.innerHTML += `
            //     <div class="cart-item">
            //     <div class="item-info">
            //         <img src="${item.img}" alt="" class="product-img">
            //         <h4>${item.menu}</h4>
            //     </div>
            //     <div class="unit-price">
            //         ${item.price} baht
            //     </div>
            //     <div class="flour1">
            //         แป้ง : ${item.Charcoal}
            //     </div>
            //     <div class="units">
            //         <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            //         <div class="number">${item.numberOfUnits}</div>
            //         <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
            //     </div>
            //     <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.id})"></div>
            // </div>
            //     `
            // }
            // else if(TwoTone){
            //     Item.innerHTML += `
            //     <div class="cart-item">
            //     <div class="item-info">
            //         <img src="${item.img}" alt="" class="product-img">
            //         <h4>${item.menu}</h4>
            //     </div>
            //     <div class="unit-price">
            //         ${item.price} baht
            //     </div>
            //     <div class="flour1">
            //         แป้ง : ${item.TwoTone}
            //     </div>
            //     <div class="units">
            //         <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            //         <div class="number">${item.numberOfUnits}</div>
            //         <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
            //     </div>
            //     <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.id})"></div>
            // </div>
            //     `
            //}
            
                Item.innerHTML += `
                <div class="cart-item">
                <div class="item-info">
                    <img src="${item.img}" alt="" class="product-img">
                    <h4>${item.menu}</h4>
                </div>
                <div class="unit-price">
                    ${item.price} baht
                </div>
                <div class="flour1">
                    แป้ง : ${item.Vanila}
                </div>
                <div class="units">
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
                </div>
                <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.id})"></div>
            </div>
                `
            
        })
    
  
}
function removeItemFromCart(id){
    carts = carts.filter((item) => item.id != id)
    updateCart();
}

function changeNumberOfUnits(action, id){
    carts = carts.map((item) => {

        let numberOfUnits = item.numberOfUnits;

        if(item.id == id){
            if(action == "minus" && numberOfUnits > 1){
                numberOfUnits--;
            }
            else if(action == "plus"){
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
 }