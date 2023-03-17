interface CommentProps {
  params: {
    id: number;
  };
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchSingleComment = async (id: number) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      next: {
        revalidate: 60,
      },
    });
    const comments = (await res.json()) as Comment[];
    console.log({
      status: 'success',
      comments,
    });
    return comments;
  } catch (err) {
    console.log(err);
  }
};

const Post = async ({ params }: CommentProps) => {
  const { id } = params;
  const comments = await fetchSingleComment(id);
  return (
    <ul>
      {comments?.map(({ id, name, body }) => (
        <li key={id}>
          <h4>{name}</h4>
          <small>{body}</small>
        </li>
      ))}
    </ul>
  );
};

export default Post;
