export type user = {
   id: string
   email: string
   password: string,
   role: userRole,
}

export type authenticationData = {
   id: string,
   role: string
}

enum userRole {
   NORMAL,
   ADMIN
}