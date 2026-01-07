import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogs, saveBlogs } from "../utils/localStorage";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const deleteBlog = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const updated = blogs.filter((b) => b.id !== id);
      saveBlogs(updated);
      setBlogs(updated);
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="blogs-header">
        <h2>All Blogs</h2>
        <input
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredBlogs.length === 0 && <p>No blogs found.</p>}

      {filteredBlogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <p className="meta">
            {blog.author} • {blog.date}
          </p>

          <div className="actions">
            <Link to={`/blogs/${blog.id}`}>Read</Link>
            <Link to={`/edit/${blog.id}`}>Edit</Link>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
