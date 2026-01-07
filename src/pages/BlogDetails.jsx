import { useParams, Link } from "react-router-dom";
import { getBlogs } from "../utils/localStorage";

function BlogDetails() {
  const { id } = useParams();
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <h3>Blog not found</h3>;

  return (
    <div className="container">
      <h2>{blog.title}</h2>
      <p className="meta">
        {blog.author} • {blog.date}
      </p>
      <p>{blog.content}</p>

      <Link to="/blogs">← Back to Blogs</Link>
    </div>
  );
}

export default BlogDetails;
