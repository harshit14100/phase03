import axios from "axios";
import type { Post } from "../types/Type";


const api = axios.create({
    baseURL : "https://jsonplaceholders.typicode.com"
})

export const fetchposts = async():Promise<Post[]>=>{
    const res = await api.get<Post[]>("/posts"); 
    return res.data;
}