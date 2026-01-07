import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/localStorage";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("All fields required");
      return;
    }

    const blogs = getBlogs();

    const newBlog = {
      id: Date.now(),
      title,
      content,
      author: "Kunal",
      date: new Date().toLocaleDateString(),
    };

    saveBlogs([...blogs, newBlog]);
    navigate("/blogs");
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br /><br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateBlog;
