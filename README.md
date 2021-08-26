# 📋 Sobre a atividade

Na atividade de hoje iremos aprender sobre os eventos do usuário no navegador, e como podemos utilizar esse evento para alterar nossa interface de forma reativa. Mostraremos valores de 0 a 100 de forma aleatória.

# ℹ️ Informações úteis

## Resultado

![](https://i.ibb.co/PZ79yLT/gif-atividade-state.gif)

## 🖐️🍝Mão na massa!

*   Com o seu projeto React criado, comece por importar o hook `useState` que será utilizado para criar o state do número que atualiza em tela como vimos no resultado.
*   Diferentemente das outras vezes que utilizamos o useState, queremos instanciar com um valor aleatório, para que a primeira vez que o usuário entre na nossa aplicação, tenha um valor gerado de forma aleatória. Com isso, podemos utilizar o módulo `Math` do JS em conjunto com o state, dessa forma: `const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)`, ou seja, o número aleatório retornado pelo Math.random() de 1 a 100 será o valor padrão do nosso state `number`
*   Como você já deve saber, o Math.floor() irá arredondar o número retornado pelo Math.random que varia de 1 a 100\. Caso tenha dúvidas, de uma olhada em: [](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
*   Renderize em tela o `number` e crie um botão sem função por enquanto.
*   Crie uma função chamada `randomNumber` que será responsável pela atualização do state. Essa função irá chamar o `setNumber` utilizando o Math.floor e Math.random mais uma vez: `setNumber(Math.floor(Math.random() * 100) + 1);`
*   Agora, adicione a função que você criou na propriedade onClick da tag <button> que você colocou em tela anteriormente `<button onClick={randomNumber}> Criar novo número </button>`

## 💪Agora é com você

*   Estilize o botão e a aplicação da forma que achar mais atrativo.

# 💡Conhecimentos aplicados:

*   State
*   onClick
*   Fundamentos do React
*   Math
