REST

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
Pega o restante dos parametros e joga dentro de um array


Não é uma Rest


``` ruby
    fruitList(...uva, ...banana, ...laranja)
```
Rest só aceita uma _...varName_


``` ruby
    fruitList(...uva, banana, laranja)
```

Rest só aceita _...varName_ no final dos parâmetros
