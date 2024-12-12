import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {


  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  }


    return (
      <form className="create-post" onSubmit={handleSubmit}>
        <div class="mb-3">
    <label htmlFor="userId" class="form-label">user Id</label>
    <input type="text"  ref={userIdElement}  class="form-control" id="userId" placeholder="user-12" />
    <div id="userId" class="form-text">Identify Your self</div>
  </div>
  <div class="mb-3">
    <label htmlFor="title" class="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} class="form-control" id="title" placeholder="How Are you doing Today" />
    <div id="title" class="form-text">We are waiting for you , Create a Post</div>
        </div>
    <div class="mb-3">
    <label htmlFor="body" class="form-label">Post Content</label>
    <input type="text" ref ={postBodyElement} class="form-control" id="body" placeholder="How Are you doing Today" />
    <div id="body" class="form-text">Tell us more about your day</div>
        </div>
    <div class="mb-3">
    <label htmlFor="reactions" class="form-label">Number of Reactions</label>
    <input type="text" ref={reactionsElement} class="form-control" id="reactions" placeholder="Reactions" />
    <div id="title" class="form-text">how many react you get for this post</div>
        </div>
        <div class="mb-3">
    <label htmlFor="tags" class="form-label">Post Tags</label>
    <input type="text" ref={tagsElement} class="form-control" id="tags" placeholder="Please enter multiple tags using space" />
    <div id="title" class="form-text">Enter your tags</div>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    )
}

export default CreatePost;