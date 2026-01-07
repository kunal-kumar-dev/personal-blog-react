import { Link } from "react-router-dom";

function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">
      <h2 className="logo">MyBlog</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/create">Create</Link>
        <Link to="/about">About</Link>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
