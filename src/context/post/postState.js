import { Children, useState } from "react";
import postContext from "./postContext"

const PostContext = postContext;

const PostState = ({Children}) =>{
const [posts, setPosts] = useState({})
    return (
        <PostContext.Provider value={{posts, setPosts}}>
            {Children}
        </PostContext.Provider>
    )
}

export default PostState;