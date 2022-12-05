const container = document.querySelector(".produtos-float")
const coffees = [
    { name: "Camisa", image: "./Imagens/camisetafem2.jpg", descricao: "algoodão 100%", valor: "R$ 20,99"  },
    { name: "Camisa", image: "./Imagens/camisetafem2.jpg", descricao: "algoodão 100%", valor: "R$ 20,99"  },
    { name: "Camisa", image: "./Imagens/camisetafem2.jpg", descricao: "algoodão 100%", valor: "R$ 20,99"  },
    { name: "Camisa", image: "./Imagens/camisetafem2.jpg", descricao: "algoodão 100%", valor: "R$ 20,99"  },
    { name: "Camisa", image: "./Imagens/camisetafem2.jpg", descricao: "algoodão 100%", valor: "R$ 20,99"  },
    { name: "Camisa", image: "./Imagens/camisetafem2.jpg", descricao: "algoodão 100%", valor: "R$ 20,99"  }
];


const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({ name, image, descricao, valor }) =>
        (output += `<div class="row">
                        <div class="col row-cols-3 row-cols-md-5 g-4 ">
                            <div class="card">
                                <img class="card--avatar" src=${image} />
                                <h1 class="card--title">${name}</h1>
                                <p class="card__texto">${descricao}</p>
                                <span>${valor}</span>
                                <a class="card--link" href="#">Comprar</a>
                            </div>
                        </div>
                    </div>
        `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)