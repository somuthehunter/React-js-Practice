import { createContext, useReducer } from "react";


// const DEFAULT_CONTEXT = {
//     postList: [],
//     addPost: () => { },
//     deletePost: () => { },
// };


export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost :() => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post =>post.id !== action.payload.postId )
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
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

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        });
    };

    return (<PostListContext.Provider value={{postList,addPost,deletePost }}>
        {children}
    </PostListContext.Provider>
    );
};


  const DEFAULT_POST_LIST = [
    {
    id: '1',
    title: 'Trip to Goa',
    body: 'chaddi pehne ho kya , batau na',
    reactions: 5,
    userId: "user-9",
    tags : ['vacations', 'Goa' , 'sexy'],
    },
    {
    id: '2',
    title: 'dispression on the way',
    body: 'all the boys in my group is already down ',
    reactions: 3,
    userId: "user-12",
    tags : ['dispression', 'collegemastis' , 'russian'],
    },
];

export default PostListProvider;