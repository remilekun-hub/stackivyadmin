import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify-otp";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import DashboardLayout from "./components/DashboardLayout";
import NewBlog from "./pages/CreateBlog";
import SignupOtp from "./pages/SignupOtp";
import Thereisuser from "./pages/Thereisuser";
import Applications from "./pages/Applications";
import JobPosts from "./pages/JobPosts";
import CreateJobPost from "./pages/CreateJobPost";
import SingleApplicant from "./pages/SingleApplicant";
import CareerSettimgs from "./pages/CareerSettings";
import Startup from "./pages/Startup";
import SingleStartUp from "./pages/SingleStartUp";

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
          <Route path="/career/applications" element={<Applications />} />
          <Route path="/career/application/:id" element={<SingleApplicant />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/startup/:id" element={<SingleStartUp />} />
          <Route path="/career/manage-job-posts" element={<JobPosts />} />
          <Route path="/career/job-posts/create" element={<CreateJobPost />} />
          <Route path="/career/settings" element={<CareerSettimgs />} />

          <Route element={<Blog />} path="/blog" />
          <Route element={<NewBlog />} path="/blog/create" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
