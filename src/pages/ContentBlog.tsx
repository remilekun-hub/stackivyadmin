import Sidebar from "../components/Sidebar";

function ContentBlog() {
  return (
    <section className="flex">
      <Sidebar />
      <main className="flex-1">
        <header className="px-4 lg:px-6">
          <nav></nav>
        </header>
      </main>
    </section>
  );
}

export default ContentBlog;
