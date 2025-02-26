# Explorador de Livros com Angular

## Descrição

Explorador de Livros é uma aplicação web para buscar, favoritar e organizar livros usando a Google Books API. Os usuários podem adicionar livros aos favoritos, adicionar notas pessoais, avaliações, tags e visualizar informações detalhadas sobre os livros além de poder editar as informações tanto na página INICIAL quanto na página de FAVORITOS.

## Funcionalidades

- **Busca de Livros**: Permite a busca de livros pela Google Books API.
- **Favoritar Livros**: Adiciona livros à lista de favoritos.
- **Filtro de Favoritos**: Filtra livros favoritos por tag ou nome.
- **Notas Pessoais**: Adiciona notas pessoais aos livros favoritos.
- **Avaliações**: Avalia os livros com uma nota de 1 a 5.
- **Tags**: Adiciona tags aos livros favoritos.
- **Informações Detalhadas**: Exibe informações detalhadas sobre os livros, incluindo links para LER, BAIXAR PDF e COMPRAR.
- **Interface Moderna**: Interface de usuário com efeitos visuais modernos, incluindo animações e gradientes.

## Instalação

Siga as instruções abaixo para configurar e rodar a aplicação localmente.

### Pré-requisitos

- Node.js e npm (Você pode baixar e instalar em [nodejs.org](https://nodejs.org/))
- Angular CLI

### Passos para Instalar

1. Clone este repositório:
    ```bash
    git clone https://github.com/Fernando32117/Busca-de-Livros.git
    cd Pesquisa-De-Livros
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Rode a aplicação:
    ```bash
    ng serve
    ```

4. Abra o navegador e navegue até `http://localhost:4200` para visualizar a aplicação.

## Testes Unitários

Para garantir a qualidade e robustez do código, implementei testes unitários usando Jasmine e Karma.

### Executando os Testes

1. Para executar os testes unitários, use o seguinte comando:
    ```bash
    ng test
    ```

2. Isso iniciará o Karma e executará todos os testes configurados. Você verá uma saída detalhada indicando quais testes passaram e quais falharam.

### Cobertura dos Testes

Os testes unitários cobrem as seguintes funcionalidades:

- **BookStorageService**: Adicionar, remover, atualizar e verificar favoritos.
- **BookListComponent**: Exibição e interação dos livros, abertura e fechamento do modal, e funcionalidade de favoritar.
- **BookFavoritesComponent**: Exibição de favoritos, filtro de livros por tag ou nome, e interação com o modal.

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento da aplicação web.
- **TypeScript**: Linguagem de programação utilizada no desenvolvimento.
- **Google Books API**: API utilizada para buscar informações sobre os livros.
- **Jasmine**: Framework de testes unitários para JavaScript.
- **Karma**: Ferramenta de execução de testes unitários.
- **HTML5 e CSS3**: Tecnologias padrão para estruturação e estilização da aplicação.

## Uso

1. Digite o título ou autor do livro na barra de busca.
2. Clique no botão "Buscar".
3. Visualize a lista de livros correspondentes à sua busca.
4. Clique no botão "Info" para visualizar mais detalhes sobre o livro em um modal.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

---

Feito com ❤️ por [Fernando Souza](https://www.linkedin.com/in/gerfernandosouza/)
