import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { IPostCreate } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}


    public createPost = async (req: Request, res: Response) => {

        try {
            const input:IPostCreate = {
                content: req.body.content,
                token: req.headers.authorization
            }
            const result = await this.postBusiness.createPost(input)


            res.status(200).send({message: result})
        }
        catch(error) {
            res.status(500).send({message: error.message})
        }
    }
    public getPost = async (req: Request, res: Response) => {

        try {
            const token: string = req.headers.authorization
            const result = await this.postBusiness.getPosts(token)


            res.status(200).send({posts: result})
        }
        catch(error) {
            res.status(500).send({message: error.message})
        }
    }
    public deletePost = async (req: Request, res: Response) => {

        try {
            const token: string = req.headers.authorization
            const id: string = req.params.id
            const result = await this.postBusiness.deletePost(token, id)


            res.status(200).send({message: result})
        }
        catch(error) {
            res.status(500).send({message: error.message})
        }
    }
    public likePost = async (req: Request, res: Response) => {

        try {
            const token: string = req.headers.authorization
            const id: string = req.params.id
            const result = await this.postBusiness.likePost(token, id)


            res.status(200).send({message: result})
        }
        catch(error) {
            res.status(500).send({message: error.message})
        }
    }
    public dislikePost = async (req: Request, res: Response) => {

        try {
            const token: string = req.headers.authorization
            const id: string = req.params.id
            const result = await this.postBusiness.dislikePost(token, id)


            res.status(200).send({message: result})
        }
        catch(error) {
            res.status(500).send({message: error.message})
        }
    }
}