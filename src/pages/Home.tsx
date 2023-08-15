import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <section className="flex">
      <Sidebar />
      <main className="flex-1 px-4 lg:px-6 ">
        <p>dashboard here</p>
        <p>open this page on desktop to see sidebar/hamburger</p>
      </main>
    </section>
  );
}

export default Home;
