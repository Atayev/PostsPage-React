
export default class PostService {
    
    static async getAll(limit=10,page=1){
       
        const response= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        const data = response
        return data
    }
    static async getById(id){
       
        const response= await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = response
        return data
        
    }
    static async getComById(id){
       
        const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const data = response
        return data
        
    }
}

