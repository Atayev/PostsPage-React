import React, { useEffect, useState } from "react";
import { getPageCount  } from "../utils/pages";
import "../Styles/App.css"
import  { useFetching } from "../hooks/useFetching"
import  { usePosts } from "../hooks/usePosts"
import { Loader } from "../Components/UI/Loader/Loader";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import PostService from "../API/PostService";
import MyModal from "../Components/UI/MyModal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import Pagination from "../Components/UI/Pagination/Pagination";
import MySelect from "../Components/UI/select/MySelect";



function Page() {
 
  const [posts,setPosts] = useState([])
  const [filter,setFilter] =useState({sort: '', query: ''})
  const [modal,setModal] = useState(false)
  const [totalPages,setTotalPages] = useState(0)
  const [limit,setLimit] = useState(10)
  const [page,setPage] = useState(1)
  
  const sortedAndSearchedPosts= usePosts(posts,filter.sort,filter.query)
  const [fetchPosts,isPostsLoading,postError]= useFetching(async ()=>{
    const response= await PostService.getAll(limit,page)
    const posts = await response.json()
    const totalCount =response.headers.get('x-total-count')
    setTotalPages(getPageCount(totalCount,limit))
    setPosts(posts)
   
  })
    useEffect(()=>{
      fetchPosts(limit,page)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page,limit])
  
    const changePage = (page) => {
      setPage(page)
      
    }


  const createPost = (newPost)=> {
  setPosts([...posts,newPost])
  setModal(false)
}
  
  const removePost = (post) => {
    setPosts(posts.filter(p=>p.id!==post.id))
  }
  
  return (
    <div className="App">
      <MyButton style={{marginTop:"30px"}} onClick={()=> setModal(true)}>
        create an account
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:"15px"}}/>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect 
          value={limit}
          onChange={value => setLimit(value)}
          defaultValue="Number of posts on the page"
          options={[
            {value:5, name:"5"},
            {value:10, name:"10"},
            {value:25, name:"25"},
            {value:-1, name:"View All"},
          ]}
      />
      {postError &&
        <h1>ERORR 404</h1>
        }
      {isPostsLoading
       ? <div style={{display:"flex",justifyContent:"center", marginTop:"50px"}}><Loader/></div>
       :<PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List of Posts"}/>
       } 
        <Pagination 
        page={page} 
        totalPages={totalPages} 
        changePage={changePage} 
        />
    </div>
  );
}

export default Page;
