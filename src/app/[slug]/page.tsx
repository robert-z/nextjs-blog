import MarkdownPreview from "@/components/markdownPreview";
import getPost from "@/services/getPost";

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const post = getPost(slug);

  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-xl font-semibold">{post.title}</h1>
      <div>
        <span className="text-xl font-semibold">{post.category}</span>
        <span className="text-xl font-semibold">{post.author}</span>
        <span className="text-xl font-semibold">{post.date}</span>
      </div>
      <MarkdownPreview source={post.content} />
    </div>
  );
};

export default PostPage;
