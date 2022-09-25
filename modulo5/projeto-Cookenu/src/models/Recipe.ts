

export default class Recipe {
    constructor(
        private id: string,
        private title: string, 
        private description: string,
        private createdAt: string,
        private user_id: string) {

        }
        public getId() {
            return this.id
        }
        public getTitle() {
            return this.title
        }
        public getDescription() {
            return this.description
        }
        public getCreatedAt() {
            return this.createdAt
        }
        public getuserId() {
            return this.user_id
        }
}