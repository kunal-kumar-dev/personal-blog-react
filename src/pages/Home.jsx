function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Personal Blog</h1>

      <p>
        This is a personal blog application built using <b>ReactJS</b>.
        The purpose of this project is to understand how real-world
        frontend applications are developed using components, routing,
        state management, and browser storage.
      </p>

      <p>
        Users can create, read, update, and delete blog posts.
        All blog data is managed on the client side using
        <b> localStorage</b>.
      </p>

      <p>
        This project focuses more on functionality and core React concepts
        rather than heavy UI design.
      </p>
    </div>
  );
}

export default Home;
