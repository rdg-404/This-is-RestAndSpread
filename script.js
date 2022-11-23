


// ================= REST =========================



// // imprime o primeiro normal e o resto joga dentro de um array
// function showList(company, ...clients) {
//     console.log(company)
//     console.log(clients)
// }


// showList('Origamid','Joao', 'Maria', 10)







// ================= SPREAD =========================

// const numeros = [1, 2, 3, 4, 5, 66, 7, 8, 9]

// console.log(Math.max(...numeros))  ///forma de espalhar os numeros ou por um por um no array



//SPREAD EXAMPLEs



// - 1


// const items = document.querySelectorAll('li');


// ///map so retorna array
// [...items].map(item => {
//     console.log(item)
// })

// console.log(items)



// - 2 - Clonando objetos

const carro = {
    cor: "azul",
    portas: 4,
    ano: 2022
};


const cloneCarro = {...carro, turbo: true} //pega todas as props de carro e add mais


console.log(cloneCarro2)

