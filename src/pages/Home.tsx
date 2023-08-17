import DashBox from "../components/DashBox";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <section>
      <div className="flex-1 mx-auto">
        <Navbar>
          <div className="flex items-center">
            <h1 className="font-medium text-[24px]">Dashboard</h1>
          </div>
        </Navbar>

        <main className="p-4 lg:p-6 xl:p-7 bg-[#F3F4F6]">
          <div className="grid grid-cols-3">
            <DashBox />
          </div>
        </main>
      </div>
    </section>
  );
}

export default Home;
