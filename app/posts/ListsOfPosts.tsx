import Link from 'next/link';
import LikeButton from './LikeButton';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: {
        revalidate: 60,
      },
    });
    const posts = (await res.json()) as Posts[];
    console.log({
      status: 'success',
      posts,
    });
    return posts;
  } catch (err) {
    console.log(err);
  }
};

const ListsOfPosts = async () => {
  const posts = await fetchPosts();

  return (
    <>
      {posts?.slice(0, 5).map(({ id, title, body }) => (
        <div key={id}>
          <Link href={`posts/${id}`}>
            <h2 style={{ color: 'lightblue' }}>{title}</h2>
            <p>{body}</p>
            <LikeButton id={id} />
          </Link>
        </div>
      ))}
    </>
  );
};
export default ListsOfPosts;
