type filmes = {
    nome: string,
    data: number,
    genero: string,
    pontuacao?: number
}

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

const ordenaFilme = (nome: string, data: number, genero: string, pontuacao?: number | undefined): filmes => {
    const filme: filmes = {
        nome: nome,
        data: data,
        genero: genero,
        pontuacao: pontuacao
    }
    const filme1: filmes = {
        nome: nome,
        data: data,
        genero: genero,
    }
    if (pontuacao === undefined) {
        return filme1
    }
    return filme
}

console.log(ordenaFilme("Duna", 2021, GENERO.ACAO))