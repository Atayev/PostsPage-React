import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { Loader } from '../Components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'
const PostIdPage = () => {
    const params= useParams()
    const [post,setPost] =useState([])
    const [comments,setComments] =useState([])
    const [fetchPostsById,isLoading] = useFetching(async (id)=> {
        const response = await PostService.getById(params.id)
        const posts =await response.json()
        setPost(posts)
    })
    const [fetchComById,isComLoading] = useFetching(async (id)=> {
        const response = await PostService.getComById(params.id)
        const com =await response.json()
        setComments(com)
    })
    
    useEffect (()=>{
        fetchPostsById(params.id)
        fetchComById(params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Post Page id = {params.id}</h1>
        {isLoading
            ? <Loader/>
            : <div>{post.id} . {post.title}</div>
        }
        <h1>Comments</h1>
        {isComLoading
            ?<Loader/>
            : <div>{comments.map(comm=>
                    <div style={{marginTop:15}}>
                     <h4>{comm.id}</h4>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                    </div>
                )}</div>
        }

       
    </div>
  )
}

export default PostIdPage