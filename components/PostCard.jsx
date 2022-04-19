import React from "react";
function PostCard({ post }) {
  const [state, setState] = useState(0);
  return (
    <div>
      {post.title} {post.excerpt}
    </div>
  );
}

export default PostCard;
