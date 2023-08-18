import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify-otp";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import DashboardLayout from "./components/DashboardLayout";
import NewBlog from "./pages/CreateBlog";
import SignupOtp from "./pages/SignupOtp";
import Thereisuser from "./pages/Thereisuser";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) {
      setUser(u);
    }
  }, [user]);

  return (
    <>
      <Routes>
        <Route element={<Signup />} path="/sign-up" />
        <Route element={user ? <Thereisuser /> : <Signin />} path="/" />
        <Route element={<Verify />} path="/signin/verify-otp" />
        <Route element={<SignupOtp />} path="/signup/verify-otp" />
        <Route element={<Forgotpassword />} path="/forgot-password" />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/career" element={<Career />} />

          <Route element={<Blog />} path="/blog" />
          <Route element={<NewBlog />} path="/blog/create" />
        </Route>

        {/* <Route element={<Contact />} path="/contact" />
        <Route element={<ContentBlog />} path="/content/blog" />
        <Route element={<ContentBlog />} path="/content/new" />
        <Route element={<Contact />} path="/contact" /> */}
      </Routes>
    </>
  );
}

export default App;
