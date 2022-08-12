type post = {
    autor: string,
    texto: string
}
type postss = [person1:post,person2:post,person3:post,person4:post,person5:post]
const posts: postss = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
      }
]

function buscarPostsPorAutor(posts: postss, autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
  console.log(buscarPostsPorAutor(posts,'Alvo Dumbledore'))