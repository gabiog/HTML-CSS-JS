let nomeDaReceita = "Macarrão";
        let ingredientes = ["farinha", "ovo", "sal", "azeite"];
        let linkDaReceira = "https://www.tudogostoso.com.br/categorias/1030-macarrao"

        let botaoDeCriarReceita = document.querySelector("#cadastrar receita")
        botaoDeCriarReceita.addEventListener("click", CadastrarReceita)

        function cadastrarReceita () {
            let sessao = document.querySelector("section");

            sessao.innerHTML +=`
            <article>
                <h2>Macarrão</h2>
                <p><strong>Ingredientes:</strong>Farinha, ovo, sal, azeite</p>
                <a href="htpp://google.com">Ver Receita</a>
            </article>`
        }