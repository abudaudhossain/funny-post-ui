import {useState } from "react";
import postContext from "./postContext"

const PostContext = postContext;

const PostState = ({children}) =>{
const [posts, setPosts] = useState()
    return (
        <PostContext.Provider value={{posts, setPosts}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostState;