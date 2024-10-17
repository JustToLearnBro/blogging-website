import { useEffect, useState } from "react";
import axios from "axios";
import { BackendURL } from "../config";

export interface Blog {
    "content": string,
    "title":string,
    "id": number,
    "author": {
        "name": string
    }
}

export const UseBlog = ({id} : {id: string})=>{
    const [blog, setBlog] = useState<Blog>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(`${BackendURL}/api/v1/blog/${id}`, { headers: { "Authorization": "Bearer "+localStorage.getItem("token") } }).then(respone => { setBlog(respone.data); setLoading(false); });
    }, [id])
    return { loading, blog };
}

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(`${BackendURL}/api/v1/blog/bulk`, { headers: { "Authorization": "Bearer "+localStorage.getItem("token") } }).then(respone => { setBlogs(respone.data); setLoading(false); });
    }, [])
    return { loading, blogs };
}