import Link from "next/link";
import getPosts from "@/services/getPosts";

const HomePage = () => {
  const posts = getPosts();

  return (
    <div className="flex flex-col space-y-2">
      {posts.map((post) => (
        <div key={post.slug} className="flex flex-col">
          <h2 className="text-xl font-semibold">
            <Link href={post.slug}>{post.title}</Link>
          </h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
