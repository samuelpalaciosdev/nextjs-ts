import ListsOfPosts from './ListsOfPosts';

// eslint-disable-next-line @typescript-eslint/require-await
export default async function Posts() {
  /* @ts-expect-error Async Server Component */
  return <ListsOfPosts />;
}
