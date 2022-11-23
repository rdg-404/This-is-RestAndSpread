


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

// const carro = {
//     cor: "azul",
//     portas: 4,
//     ano: 2022
// };


// const cloneCarro = {...carro, turbo: true} //pega todas as props de carro e add mais


// console.log(cloneCarro2)



//  - 3 - Clones perdem as funcionalidades dos prototypes

// class Transporte {
//     constructor() {
//         this.terrestre = true;
//     }
//     andar(){
//         console.log("andou")
//     }
// }

// class Carro extends Transporte {
//     constructor(cor, portas) {
//         super(); //ativar a extends de transporte
//         this.cor = cor;
//         this.portas = portas;
//     }
// }


// const carro = new Carro('vermelho', 4); //cria um novo obj apartir da class

// const cloneCarro = {...carro}

// console.log(cloneCarro) //nao herda as props da class

// console.log(carro) //herdar as props da class



/// RESUMO

// Clones pegam o que ja tem e criam um novo, mas nao pegam as props da class

