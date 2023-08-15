import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <section className="flex">
      <Sidebar />
      <main className="flex-1 px-4 lg:px-6 ">
        <li>
          <Link to={"/sign-in"}>sign in</Link>
        </li>
        <li>
          <Link to={"/sign-up"}>sign up</Link>
        </li>
        <li>
          <Link to={"/verify-otp"}>verif otp</Link>
        </li>
        <li>
          <Link to={"/forgot-password"}>forgort password</Link>
        </li>
        <p>dashboard here</p>
      </main>
    </section>
  );
}

export default Home;
