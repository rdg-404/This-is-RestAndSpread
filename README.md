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
