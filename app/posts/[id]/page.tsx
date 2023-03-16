interface PostProps {
  params: {
    id: number;
  };
}

const Post = ({ params }: PostProps) => {
  const { id } = params;
  return <h1>Post {id} here :)</h1>;
};

export default Post;
