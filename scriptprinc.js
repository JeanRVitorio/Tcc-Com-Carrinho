let shop = document.getElementById("shop");

/**
--> Cesta para armazenar todos os itens selecionado a parte getItem está recuperando dados do armazenamento local se o armazenamento local estiver em branco, a cesta se tornará uma matriz vazia
*/

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
--> Gera a loja com fichas de produtos compostas por imagens, título, preço, botões, descrição
*/

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, desc, img, price } = x;
            let search = basket.find((y) => y.id === id) || [];
            return `
    <div id=product-id-${id} class="item card">
        <img width="220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
        <div class="price-quantity">
            <h2>R$ ${price} </h2>
            <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
            </div>
        </div>
    </div>
    `;
        })
        .join(""));
};

generateShop();

/**
--> Usado para aumentar a quantidade do item do produto selecionado em 1
*/

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

/**
--> Usado para diminuir a quantidade do item do produto selecionado em 1
*/

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

/**
--> Para atualizar os dígitos dos itens selecionados em cada cartão de item
*/

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

/**
--> Para calcular a quantidade total de itens selecionados
*/

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
