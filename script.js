//# 3️⃣ Escrevendo as classes de um Jogo
//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//- Classes e Objetos

//## Objetivo:

//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

//## Saída

//Ao final deve se exibir uma mensagem:

//- "o {tipo} atacou usando {ataque}"
//  ex: mago atacou usando magia
//  guerreiro atacou usando espada

// Inicio do código:
// classe de heroi:

class Character {
    constructor(characterClass) {
        this.name = "Dark Wings";
        // Troquei idade para nível, onde 0 é o menor e 400 é o maior
        this.level = 280;
        this.classCharacter = characterClass;
        this.characterAttack = ["Espada", "Magia", "Artes marciais", "Shuriken"];
        this.typeCharacter = ["Guerreiro", "Mago", "Monge", "Ninja"]
    }

    attackAction() {
        for (let i = 0; i < this.classCharacter.length; i++) {
            // Verifica a classe do personagem
            switch (this.classCharacter[i]) {
                case "Guerreiro":
                    // Lógica de ataque para Guerreiro
                    console.log(`${this.name} do tipo ${this.typeCharacter[0]}, ataca com ${this.characterAttack[0]}!`);
                    break;
                case "Mago":
                    // Lógica de ataque para Mago
                    console.log(`${this.name} do tipo ${this.typeCharacter[1]}, ataca com ${this.characterAttack[1]}!`);
                    break;
                case "Monge":
                    // Lógica de ataque para Monge
                    console.log(`${this.name} do tipo ${this.typeCharacter[2]}, ataca com ${this.characterAttack[2]}!`);
                    break;
                case "Ninja":
                    // Lógica de ataque para Ninja
                    console.log(`${this.name} do tipo ${this.typeCharacter[3]}, ataca com ${this.characterAttack[3]}!`);
                    break;
                default:
                    // Lógica de ataque para outras classes
                    console.log(`${this.name} escolha seu tipo de personagem.`);
                    break;
            }
        }
    }
}

// Exemplo de uso da classe
const darkWings = new Character(["Guerreiro", "Mago", "Monge", "Ninja"]);
darkWings.attackAction();
