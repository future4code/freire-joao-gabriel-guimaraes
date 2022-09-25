export type authenticationData = {
    id: string,
    role: string
}

export type Users = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: userRole
}

export type Recipes = {
    id: string,
    title: string, 
    description: string,
    createdAt: string
    user_id: string
}

export enum userRole {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}