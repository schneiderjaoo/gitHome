function pesquisar(){
    let section = document.getElementById("resultadosDaPesquisa");
    let resultados = "";
    
    let campoPesquisa = document.getElementById("campoPesquisa").value.trim().toLowerCase();
    console.log(campoPesquisa);

    if(campoPesquisa === ""){
        section.innerHTML = "<p>A barra de pesquisa está vazia!</p>";
        return;
    }

    // Para cada dado dentro da lista de tiposDeDados
    for(let dado of comandosGit){
        let nome = dado.nome.toLowerCase(); // Usamos o nome original do dado
        let descricao = dado.descricao.toLowerCase(); // Usamos a descrição original

        // Verificamos se a pesquisa corresponde ao nome ou à descrição
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += ` 
                <div class="item-resulado">
                    <h2>
                        <a href=" target="_blank">
                            ${dado.nome}!
                        </a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                        ${dado.exemplo ? `<br><strong>Exemplo:</strong> ${dado.exemplo}` : ""}
                    </p>
                </div>`;
        }
    }

    // Exibe a mensagem de "nenhum resultado" se nada for encontrado
    if(resultados === ""){
        resultados = "<p>Nenhum resultado encontrado!</p>";
    }

    section.innerHTML = resultados;
}

document.addEventListener('DOMContentLoaded', function() {
    const gitHomeTitle = document.querySelector('.git-home-title');

    gitHomeTitle.addEventListener('mouseenter', function() {
        gitHomeTitle.style.transition = 'color 0.5s ease, transform 0.5s ease';
        gitHomeTitle.style.color = '#58a6ff';
        gitHomeTitle.style.transform = 'scale(1.1)';
    });

    gitHomeTitle.addEventListener('mouseleave', function() {
        gitHomeTitle.style.transition = 'color 0.5s ease, transform 0.5s ease';
        gitHomeTitle.style.color = '#f0f6fc';
        gitHomeTitle.style.transform = 'scale(1)';
    });
});
