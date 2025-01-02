import { createContext, useReducer } from "react";


// const DEFAULT_CONTEXT = {
//     postList: [],
//     addPost: () => { },
//     deletePost: () => { },
// };


export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    addInitialPosts :() => {},
    deletePost :() => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post =>post.id !== action.payload.postId )
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList];
    } else if (action.type === 'ADD_INITIAL_POST') {
        newPostList = action.payload.posts
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload:  {
            id: Date.now(),
            title: postTitle,
            body: postBody,
            reactions: reactions,
            userId:userId,
            tags : tags,
    }
        })
    };

       const addInitialPosts = (posts) => {
           dispatchPostList({
               type: "ADD_INITIAL_POST",
               payload: {
                   posts,
               },
           });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        });
    };

    return (<PostListContext.Provider value={{postList,addInitialPosts,addPost,deletePost }}>
        {children}
    </PostListContext.Provider>
    );
};


export default PostListProvider;