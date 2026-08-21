import { Biblioteca } from "./Biblioteca.ts";


const prompt = window.prompt;
function perguntar(mensagem: string): string {
    return window.prompt(mensagem) ?? "";
}

function localizar (codigo: string, livros: Biblioteca[]): number {
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
let i: number;// for
let encontrou: boolean; // controle

do {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Adicionar exemplares");
    console.log("4 - Emprestar livro");
    console.log("5 - Alterar título");
    console.log("6 - Sair");

    opcao = Number(window.prompt("Digite a opção: ")!);

    switch (opcao) {

        case 1:
            codigo = prompt("Código: ")!;
            titulo = prompt("Título: ")!;
            quantidade = Number(prompt("Quantidade: ")!);

            const livro = new Biblioteca(codigo, titulo, quantidade);
            tamanho = livros.push(livro);

            console.log("Livro cadastrado!");
            break;

        case 2: //Listar livros
            if (livros.length == 0) {
                console.log("Nenhum livro cadastrado.");
            } else {
                console.log("\nLista de Livros");
                for (i = 0; i < livros.length; i++) {
                    livros[i].apresentarDados();
                }
            }
            break;

        case 3: //Adicionar exemplares
          let codigoAdicionar = prompt("Digite o código do livro para adicionar exemplares: ")!;
          encontrou = false;
          for (i = 0; i < livros.length; i++) {
              if (livros[i].getCodigo() === codigoAdicionar) {
                    let qtdAdicionar = Number(prompt("Digite a qutd de exemplar para Adicionar"));
                    resposta = livros[i].adicionarExemplares(qtdAdicionar); 
                    if (resposta) {
                        console.log("Exemplares ad com sucesso!");
                    }else{
                        console.log("Quantidade inválida.");
                    }
                    encontrou = true;
                    break;
              }
              if (encontrou == false) { // (!encontrou) {
                console.log("Livro não encontrado.");
              }
          }
        case 4: //Emprestar livro
          let codEmprestar = prompt("Digite o código do livro para emprestar: ")!;
          encontrou = false;
          for (i = 0; i < livros.length; i++) {
            if (livros[i].getCodigo() === codEmprestar ) {
                let qtdEmprestar = Number(prompt("Digite a qutd de exemplar para emprestar"));  
                 resposta = livros[i].emprestar(qtdEmprestar); 
                 if (resposta) { // diferente de vazio então livro emprestado com sucesso
                    console.log("Livro emprestado com sucesso!");
                 }else{
                    console.log("Quantidade inválida ou insuficiente.");
                 }
                 encontrou = true;
                 break;
            }
            if (encontrou == false) { // (!encontrou) {
                console.log("Livro não encontrado.");
              }
          }
        case 5: //Alterar título
        let codAlterar = prompt("Digite o código do livro para alterar o título: ")!;
        encontrou = false;
        for (i = 0; i < livros.length; i++) {
            if (livros[i].getCodigo() === codAlterar ) {
                let novoTitulo = prompt("Digite o novo título: ")!;
                livros[i].setTitulo(novoTitulo);// setando um novo título para o livro
                console.log("Título alterado com sucesso!");
                encontrou = true;
                break;
            }
            
        }
        if (encontrou == false) { // (!encontrou) {
            console.log("Livro não encontrado.");
        }

        case 6://Sair
            console.log("Saindo do programa...");
            break;

            default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }

} while (opcao != 6);
