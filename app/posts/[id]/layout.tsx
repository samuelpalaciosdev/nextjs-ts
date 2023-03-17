import Link from 'next/link';

interface PostProps {
  params: {
    id: number;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchSinglePost = async (id: number) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60,
      },
    });
    const post = (await res.json()) as Post;
    console.log({
      status: 'success',
      post,
    });
    return post;
  } catch (err) {
    console.log(err);
  }
};

const Post = async ({ params, children }: PostProps & { children: React.ReactNode }) => {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <Link href={`posts/${id}/comments`}>See comments</Link>
      {children}
    </>
  );
};

export default Post;
