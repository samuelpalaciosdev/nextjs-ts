import styles from './Posts.module.css';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        <h5>Home &bull; Posts</h5>
        {children}
      </div>
    </>
  );
}
