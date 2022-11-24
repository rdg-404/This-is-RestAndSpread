<img width="1200" height="600" src="https://image.slidesharecdn.com/restjscodebits2011-111114180849-phpapp02/95/restjs-codebits-2011-29-1024.jpg?cb=1321294318"/>

```  javascript
  function example(a, b, ...restoDosParam){
    console.log("a", a);
    console.log("b", b);
    console.log("restoDosParametros", restoDosParam); 
  }
  
  example("one", "two", "three", "four", "five");

```

O que vai aparecer no console:

``` css
  a, one
  b, two
  restoDosParametros, ["three", "four", "five"]

```


_...varName_ <br>
* Pega o restante dos parametros e joga dentro de um array

<br><br><br><br>

<h1 align="center" >Maneira errada de usar Rest</h1>


``` ruby
    fruitList(...uva, ...banana, ...laranja)
```
Rest só aceita uma _...varName_


``` ruby
    fruitList(...uva, banana, laranja)
```

Rest só aceita _...varName_ no final dos parâmetros















<br><br><br><br><br><br><br>
<h1 align="center">Spread</h1>

``` css
    const items = document.querySelectorAll('li');

    [...items].map(item => {
    console.log(item)
    })

```

* Pega a variavel  espalha seus valores em um array



``` css
  const carro = {
    cor: "azul",
    portas: 4,
    ano: 2022
  };


  const cloneCarro = {...carro, turbo: true} 

```

* Herda todas as props do objeto e adiciona mais, caso precise


``` css
  class Transporte {
    constructor() {
      this.terrestre = true;
    }
    andar(){
      console.log("andou")
    }
  }

  class Carro extends Transporte {
    constructor(cor, portas) {
      super(); //ativar a extends de transporte
      this.cor = cor;
      this.portas = portas;
    }
  }


  const carro = new Carro('vermelho', 4); //cria um novo obj apartir da class

  const cloneCarro = {...carro}
```
* const cloneCarro não herda o método andar(), pois é um clone com uma nova instância 


