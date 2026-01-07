import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogs, saveBlogs } from "../utils/localStorage";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = getBlogs();
  const blogToEdit = blogs.find((b) => b.id === Number(id));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setContent(blogToEdit.content);
    }
  }, [blogToEdit]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedBlogs = blogs.map((b) =>
      b.id === Number(id) ? { ...b, title, content } : b
    );
    saveBlogs(updatedBlogs);
    navigate("/blogs");
  };

  if (!blogToEdit) return <h3>Blog not found</h3>;

  return (
    <div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditBlog;
