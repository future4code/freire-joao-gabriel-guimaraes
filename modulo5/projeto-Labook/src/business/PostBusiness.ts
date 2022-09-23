import { PostDatabase } from "../database/PostDatabase"
import { idislikePost, ILikeDB, IPostCreate, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}


    public createPost = async (input: IPostCreate) => {

        const {content, token} = input

        if(!token) {
            throw new Error('É obrigatório passar um token.')
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error('Token inválido')
        }

        if(content.length < 1) {
            throw new Error("Parâmetro 'content' deve possuir ao menos 1 caracter.")
        }
        
        const id = this.idGenerator.generate()
        
        const post = new Post(id, content, payload.id, 0)

        await this.postDatabase.insertPost(post)

        return 'Post Criado com sucesso!'
        
    }
    public getPosts = async (token: string) => {

        if(!token) {
            throw new Error('É obrigatório passar um token.')
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error('Token inválido')
        }


        const result = await this.postDatabase.getPosts()

        return result
        
    }
    public deletePost = async (token: string, id: string) => {

        if(!token) {
            throw new Error('É obrigatório passar um token.')
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error('Token inválido')
        }

        const post = await this.postDatabase.getPostById(id)

        if(!post) {
            throw new Error('Não há post para o id informado.')
        }
        if(payload.role === USER_ROLES.ADMIN) {
            await this.postDatabase.deletePost(id)
        }
        if(payload.role === USER_ROLES.NORMAL) {
            if(payload.id === post.user_id) {
                await this.postDatabase.deletePost(id)
            }
            else {
                throw new Error("Usuários do tipo 'NORMAL' só podem deletar os próprios post.")
            }
        }
        return "Post deletado com sucesso!"
    }
    public likePost = async (token: string, id: string) => {

        if(!token) {
            throw new Error('É obrigatório passar um token.')
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error('Token inválido')
        }

        const post = await this.postDatabase.getPostById(id)
        if(!post) {
            throw new Error('Não há post para o id informado.')
        }

        const postLiked: ILikeDB[] = await this.postDatabase.getLikeByUser(payload.id)

        const result = postLiked.filter((post) => {
            return post.post_id === id
        })
      
        if(result.length > 0) {
            throw new Error('Você já curtiu este post.')
        }

        const idLike = this.idGenerator.generate()
        const content: ILikeDB = {
            id: idLike,
            post_id: id,
            user_id: payload.id
        }
        await this.postDatabase.newLike(content)
        return "like!!!!!!!"
    }
    public dislikePost = async (token: string, id: string) => {

        if(!token) {
            throw new Error('É obrigatório passar um token.')
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error('Token inválido')
        }

        const post = await this.postDatabase.getPostById(id)
        if(!post) {
            throw new Error('Não há post para o id informado.')
        }
        const postLiked: ILikeDB[] = await this.postDatabase.getLikeByUser(payload.id)

        const result = postLiked.filter((post) => {
            return post.post_id === id
        })
        
        if(result.length === 0) {
            throw new Error('Você não curtiu este post.')
        }
        const content: idislikePost = {
            id,
            userId: payload.id
        }
        await this.postDatabase.dislike(content)
        return "dislike!!!!!!!"
    }
}