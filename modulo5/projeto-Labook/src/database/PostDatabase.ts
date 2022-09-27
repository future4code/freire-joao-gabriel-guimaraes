import { idislikePost, ILikeDB, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"


    public insertPost = async (post: Post) => {

        await BaseDatabase.connection("Labook_Posts")
        .insert({
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        })
    }
    public getPosts = async () => {

        const result: IPostDB[] = await BaseDatabase.connection("Labook_Posts")
        .select('*')

        let post: any = []

        for(let user of result ) {
            let likes = await this.getPostLikes(user.id)
            post.push({...user, likes})
        }
        return post
    }

    public getPostLikes = async (id: string) => {

        const result = await BaseDatabase.connection('Labook_Likes')
        .select('user_id')
        .where('post_id', '=', `${id}`)
        return result.length
    }
    public getPostById = async (id: string) => {

        const result: IPostDB[] = await BaseDatabase.connection("Labook_Posts")
        .select()
        .where({id})
        return result[0]
    }
    public deletePost = async (id: string) => {

        await BaseDatabase.connection("Labook_Posts")
        .delete()
        .where({id})
        
    }
    public newLike = async (content: ILikeDB) => {

        await BaseDatabase.connection("Labook_Likes")
        .insert({
            id: content.id,
            post_id: content.post_id,
            user_id: content.user_id
        })
        
    }
    public getLikeByUser = async (user_id: string) => {

        const result: ILikeDB[] = await BaseDatabase.connection("Labook_Likes")
        .select()
        .where({user_id})
        return result
    }
    public dislike = async (content: idislikePost) => {

        await BaseDatabase.connection("Labook_Likes")
        .delete()
        .where({user_id: content.userId, post_id: content.id})
        
    }
}