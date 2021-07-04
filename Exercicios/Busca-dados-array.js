/* 

      Buscando e contando dados em array

      Baseado no array de livros por categoria abaixo, faca os seguintes desafios

           * Contar o numero de categorias e o numeor de livros em cada categoria
           * Contar o numero de autores
           * Mostar livros do autor Augusto Cury
           * Transformar a funcao acima em uma funcao que ira receber o nome do
           autor e devolver oo livros desse autor.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os Segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce eh insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];