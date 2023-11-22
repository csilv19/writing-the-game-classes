# Exemplo de Classe de Personagem
Este código JavaScript apresenta uma classe chamada Character que representa um personagem em um jogo de RPG simples. A classe tem propriedades como name, level, e classCharacter, além de um método attackAction que exibe uma mensagem de ataque com base na classe do personagem.

## Uso
1- Instanciar um Personagem:

const darkWings = new Character("Dark Wings", ["Guerreiro", "Mago", "Monge", "Ninja"]);
//Chamar o Método attackAction:

darkWings.attackAction();
//Propriedades da Classe

name: O nome do personagem. Padrão: "Dark Wings" se não fornecido durante a instância.

level: Representa o nível do personagem (0 a 400).

classCharacter: Array representando a classe do personagem (apenas a primeira é considerada).

characterAttack: Array de tipos de ataques correspondentes a cada classe.

typeCharacter: Array de tipos de personagens como "Guerreiro", "Mago", "Monge" e "Ninja".

Método attackAction
O método attackAction determina a classe do personagem e exibe uma mensagem de ataque com base nela. Se a classe não for reconhecida, pede ao usuário escolher um tipo de personagem.

Exemplo de Saída:

"Dark Wings do tipo Guerreiro, ataca com Espada!"
"Dark Wings do tipo Mago, ataca com Magia!"
"Dark Wings do tipo Monge, ataca com Artes marciais!"
"Dark Wings do tipo Ninja, ataca com Shuriken!"
"Dark Wings, escolha seu tipo de personagem."
