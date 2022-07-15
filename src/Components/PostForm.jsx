import React,{useState} from 'react'
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
function PostForm({create}) {
const[post,setPost] = useState({title:" ",body:" "})
  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now(),
    };

    // console.log(bodyInputRef.current.value)
    create(newPost);
    setPost({ title: " ", body: " " });
  }
  return (
    <form action="">
    <MyInput 
    value={post.title} 
    onChange ={e=>setPost({...post,title:e.target.value})}
    type="text" 
    placeholder="Name of the Post"
    />
    <MyInput 
    value={post.body} 
    onChange ={e=>setPost({...post,body:e.target.value})}
    type="text" 
    placeHolder="Description"
  />
    <MyButton  onClick={addNewPost}>Create post</MyButton>
  </form>
  )
}

export default PostForm