# Dark Wings RPG Game

## Visão Geral

O código representa uma classe `Character` para um personagem de um jogo de RPG chamado "Dark Wings". Cada personagem possui uma classe (Guerreiro, Mago, Monge, Ninja) e uma ação de ataque associada a essa classe.

## Funcionalidades

- A classe `Character` possui propriedades como nome, nível e classe.
- A ação de ataque do personagem é determinada pela classe.
- A classe usa um método `attackAction` para imprimir a ação de ataque correspondente à classe.

## Como Usar

1. Instancie um personagem usando a classe `Character`.
2. Passe um array de classes (por exemplo, `["Guerreiro", "Mago", "Monge", "Ninja"]`) ao instanciar o personagem.
3. Chame o método `attackAction` para ver a ação de ataque associada à classe do personagem.

```javascript
// Exemplo de uso da classe
const darkWings = new Character(["Guerreiro", "Mago", "Monge", "Ninja"]);
darkWings.attackAction();
