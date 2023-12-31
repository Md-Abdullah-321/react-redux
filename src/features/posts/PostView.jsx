import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./postSlice";

function PostView() {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <div className="posts">
      <h3 className="posts-title">Get Posts</h3>
      <div className="post">
        {isLoading && <h4>Loading...</h4>}
        {error && <h4>{error}</h4>}
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id} className="box">
                <h5>Title: {post.title}</h5>
                <p className="desc">Description: {post.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PostView;
