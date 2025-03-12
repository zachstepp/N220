const menuRef = document.querySelector("#menu")
const cartRef = document.querySelector("#cart")
const noItemsRef = document.querySelector("#no-items")

const menuItems = ["Hamburger - $2.99",
"Cheeseburger - $3.99",
"Cheese Pizza - $3.99",
"Pepperoni Pizza - $4.99",
"Sausage Pizza - $4.99",
"Caesar Salad - $3.99",
"Fries - $1.99",
"Onion Rings - $2.49"];
const cartItems = [];

function displayNoItems(){
    if(cartItems.length > 1){
        noItemsRef.style.display = "block";
    }
    else{
        noItemsRef.style.display = "none";
    }
}

function addToCart(e){
    cartItems.push({name: e.target.dataset.name, price: e.target.dataset.price});
    updateCart();
}

function updateCart(){
    let total = 0;
    for(let i = 0; i < cartItems.length; i++){
        const newRow = document.createElement("tr");
        newRow.innerHTML += "<td>"+ cartItems[i]["name"] + "</td>";
        newRow.innerHTML += "<td>$"+ cartItems[i]["price"] + "</td>";
        newRow.innerHTML += "<td><textarea></textarea></td>";

        const newCell = document.createElement("td");
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "-";
        removeBtn.dataset.index = i;
        removeBtn.onclick = removeFromCart;
        newCell.appendChild(removeBtn);
        newRow.appendChild(newCell);

        total += cartItems[i]["price"];
        cartRef.appendChild(newRow);
    }
    const totalRow = document.createElement("tr");
    totalRow.innerHTML += "<td>Total</td><td colspan='3'>$" + total + "</td>";
    cartRef.appendChild(totalRow);
    displayNoItems();
}

function removeFromCart(e){
    cartItems.splice(e.target.dataset.index, 1);
    updateCart();
}

function addMenuItems(){
    for (let i = 0; i < menuItems.length; i++){
        const newItem = document.createElement("li");
        newItem.innerText = menuItems[i];
        let innerStrings = menuItems[i].split(" - $")
        newItem.dataset.name = innerStrings[0];
        newItem.dataset.price = innerStrings[1];

        const itemBtn = document.createElement("button");
        itemBtn.innerText = "+";
        itemBtn.onclick = addToCart;

        newItem.appendChild(itemBtn);
        menuRef.appendChild(newItem);
    }
}

addMenuItems();