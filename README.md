# 🧙‍♂️ Escrevendo as Classes de um Jogo

Projeto desenvolvido como parte do **Desafio de Projeto** da formação **Lógica de Programação** da plataforma [DIO](https://www.dio.me).

## 🎮 Descrição

Este projeto simula a criação de personagens de um jogo, utilizando **Programação Orientada a Objetos (POO)** com JavaScript. Cada personagem possui atributos como nome, idade e classe, além de métodos para descrever o herói e realizar ataques com armas específicas para cada classe.

## 🧱 Estrutura

A classe principal `classeHero` representa um herói do jogo e possui os seguintes elementos:

### Atributos:
- `nome`: nome do herói
- `idade`: idade do herói
- `tipo`: classe do herói (ex: mago, guerreiro, monge, ninja)

### Métodos:
- `descrever()`: exibe uma descrição básica do herói
- `atacar()`: mostra uma mensagem de ataque com uma arma correspondente à classe

## ⚔️ Lógica de ataque

Cada classe ataca com uma arma específica:

| Classe    | Arma             |
|-----------|------------------|
| mago      | magia            |
| guerreiro | espada           |
| monge     | artes marciais   |
| ninja     | shuriken         |

## 💡 Exemplo de execução

```bash
O Herói Apollo tem 15 anos e é da classe mago
o mago atacou usando magia
O Herói Thor tem 25 anos e é da classe guerreiro
o guerreiro atacou usando espada
O Herói Ramessés tem 40 anos e é da classe monge
o monge atacou usando artes marciais
O Herói Moisés tem 12 anos e é da classe ninja
o ninja atacou usando shuriken
```

## 📁 Arquivo

  * index.js — Contém a definição da classe e os testes com diferentes personagens.

## 🛠️ Tecnologias utilizadas

  * JavaScript (Node.js)
  * VSCode (Editor de Código)

## 👨‍🎓 Autor

Desenvolvido por mim como parte dos desafios práticos da formação em programação da DIO.

---

📘 Um projeto introdutório à Programação Orientada a Objetos com foco em classes, métodos e instância de objetos!
