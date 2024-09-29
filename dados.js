let comandosGit = [
    {
        nome: "git init",
        descricao: "Inicializa um novo repositório Git em um diretório.",
        exemplo: "git init"
    },
    {
        nome: "git clone",
        descricao: "Clona um repositório existente a partir de um URL para o seu diretório local.",
        exemplo: "git clone https://github.com/usuario/repo.git"
    },
    {
        nome: "git status",
        descricao: "Mostra o estado das alterações no repositório (arquivos modificados, adicionados, etc.).",
        exemplo: "git status"
    },
    {
        nome: "git add",
        descricao: "Adiciona arquivos ao índice (staging area) para serem confirmados (commitados).",
        exemplo: "git add arquivo.txt"
    },
    {
        nome: "git commit",
        descricao: "Confirma as alterações no repositório, criando um snapshot das mudanças no histórico.",
        exemplo: "git commit -m 'Mensagem de commit'"
    },
    {
        nome: "git push",
        descricao: "Envia os commits do repositório local para um repositório remoto.",
        exemplo: "git push origin main"
    },
    {
        nome: "git pull",
        descricao: "Baixa as atualizações do repositório remoto e faz merge com o seu branch atual.",
        exemplo: "git pull origin main"
    },
    {
        nome: "git branch",
        descricao: "Lista, cria ou exclui branches.",
        exemplo: "git branch nome-do-branch"
    },
    {
        nome: "git checkout",
        descricao: "Troca para um branch específico ou restaura arquivos no diretório de trabalho.",
        exemplo: "git checkout nome-do-branch"
    },
    {
        nome: "git merge",
        descricao: "Combina as mudanças de um branch com outro branch ativo.",
        exemplo: "git merge nome-do-branch"
    },
    {
        nome: "git log",
        descricao: "Mostra o histórico de commits do repositório.",
        exemplo: "git log"
    },
    {
        nome: "git reset",
        descricao: "Reseta o índice e o diretório de trabalho para o estado de um commit anterior.",
        exemplo: "git reset --hard HEAD~1"
    },
    {
        nome: "git revert",
        descricao: "Desfaz um commit específico, criando um novo commit que reverte as alterações.",
        exemplo: "git revert <id-do-commit>"
    },
    {
        nome: "git stash",
        descricao: "Salva temporariamente as mudanças não confirmadas para limpá-las do diretório de trabalho.",
        exemplo: "git stash"
    },
    {
        nome: "git fetch",
        descricao: "Baixa atualizações do repositório remoto, sem mesclar as mudanças no branch ativo.",
        exemplo: "git fetch origin"
    }
];
