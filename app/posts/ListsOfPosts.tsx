import LikeButton from './LikeButton';
import styles from './Posts.module.css';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
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
    <div className={styles.container}>
      {posts?.slice(0, 5).map(({ id, title, body }) => (
        <div key={id}>
          <h2 style={{ color: 'lightblue' }}>{title}</h2>
          <p>{body}</p>
          <LikeButton id={id} />
        </div>
      ))}
    </div>
  );
};
export default ListsOfPosts;
