import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  return (
    <div>
      <h1>Post</h1>
      <h3>Number:{params.id}</h3>
      <h3>Name: {params.name}</h3>
    </div>
  );
}

export default Post;
