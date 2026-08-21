import { Biblioteca } from "./Biblioteca.ts";

const prompt = window.prompt;


function localizar(codigo: string, livros: Biblioteca[]): number {
    let posicao: number = -1;
    let i: number = 0;
    let encontrou: boolean = false;
    
    while (i < livros.length && !encontrou) {
        if (livros[i].getCodigo() === codigo) {
            posicao = i;
            encontrou = true;
        }
        i++;
    }
    return posicao;
}

let livros: Biblioteca[] = new Array<Biblioteca>();
let opcao: number;
let resposta: boolean;
let tamanho: number;
let codigo: string;
let quantidade: number;
let titulo: string;
let i: number;
let posicao: number;

do {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Adicionar exemplares");
    console.log("4 - Emprestar livro");
    console.log("5 - Alterar título");
    console.log("6 - Sair");

    opcao = Number(prompt("Digite a opção: ")!);

    switch (opcao) {

        case 1:
            codigo = prompt("Digite o código do livro para adicionar exemplares: ")!;
            posicao = localizar(codigo, livros);
            if (posicao == -1) {
                titulo = prompt("Digite o título do livro: ")!;
                do {
                    quantidade = parseInt(prompt("Digite a quantidade de exemplares: ")!);
                } while (quantidade < 0);
                let livro = new Biblioteca(codigo, titulo, quantidade);
                 tamanho = livros.push(livro);
                console.log("Livro cadastrado com sucesso!");   
                        
            } else {   console.log("Codigo não encontrado.");
            }
            break;

           

        case 2: // Listar livros
            if (livros.length === 0) {
                console.log("Nenhum livro cadastrado.");
            } else {
                console.log("\nLista de Livros");
                for (i = 0; i < livros.length; i++) {
                    livros[i].apresentarDados();
                }
            }
            break;

        case 3: // Adicionar exemplares
            codigo = prompt("Digite o código do livro para adicionar exemplares: ")!;
            posicao = localizar(codigo, livros);
            if (posicao == -1) {
                console.log("Codigo não encontrado.");
            } else {
                do {
                    quantidade = parseInt(prompt("Digite a quantidade de exemplares para adicionar: ")!);
               } while (quantidade < 0);
              resposta = livros[posicao].adicionarExemplares(quantidade);
            if (resposta == true) {
             console.log("Exemplares adicionados com sucesso!");
            } else {
            console.log("Quantidade inválida.");
            }
         }
    break;  

        case 4: // Emprestar livro
            codigo = prompt("Digite o código do livro para emprestar: ")!;
            posicao = localizar(codigo, livros);
            if (posicao == -1) {
                console.log("Codigo não encontrado.");
            } else {
                do {
                    quantidade = parseInt(prompt("Digite a quantidade de exemplares para emprestar: ")!);
               } while (quantidade < 0);
              resposta = livros[posicao].emprestar(quantidade);
            if (resposta == true) {
             console.log("Exemplares emprestados com sucesso!");
            } else {
            console.log("Quantidade inválida.");
            }
         }
    break;  

        case 5: // Alterar título
            codigo = prompt("Digite o código do livro para alterar o título: ")!;
            posicao = localizar(codigo, livros);
            if (posicao == -1) {
                console.log("Livro não encontrado.");
            } else {
                let novoTitulo = prompt("Digite o novo título: ")!;
                livros[posicao].setTitulo(novoTitulo);
                console.log("Título alterado com sucesso!");
            }
            break;

        case 6: // excluir livro
            codigo = prompt("Digite o código do livro para excluir: ")!;
            posicao = localizar(codigo, livros);
            if (posicao == -1) {
                console.log("Livro não encontrado.");
            } else {
                livros.splice(posicao, 1); // Remove o livro do array
                console.log("Livro excluído com sucesso!");
            }
            break;
    
       default:
         console.log("Opção inválida. Tente novamente.");
          break;
    }

} while (opcao !== 6);