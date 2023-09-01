import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Verify from "./pages/Verify-otp";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import DashboardLayout from "./components/DashboardLayout";
import NewBlog from "./pages/CreateBlog";
import SignupOtp from "./pages/SignupOtp";
import Applications from "./pages/Applications";
import JobPosts from "./pages/JobPosts";
import CreateJobPost from "./pages/CreateJobPost";
import SingleApplicant from "./pages/SingleApplicant";
import CareerSettimgs from "./pages/CareerSettings";
import Startup from "./pages/Startup";
import SingleStartUp from "./pages/SingleStartUp";
import Guides from "./pages/Guides";
import CreateGuide from "./pages/CreateGuide";
import Quote from "./pages/Quote";
import Signin from "./pages/Signin";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import Webinars from "./pages/Webinars";
import CreateWebinars from "./pages/CreateWebinars";
import Account from "./pages/Account";
import Support from "./pages/Support";
import SingleComplain from "./pages/SingleComplain";
import Member from "./pages/Member";
import SingleMember from "./pages/SingleMember";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Signup />} path="/sign-up" />
        <Route element={<Signin />} path="/" />
        <Route element={<Verify />} path="/signin/verify-otp" />
        <Route element={<SignupOtp />} path="/signup/verify-otp" />
        <Route element={<Forgotpassword />} path="/forgot-password" />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/career/applications" element={<Applications />} />
          <Route path="/career/application/:id" element={<SingleApplicant />} />

          <Route path="/career/manage-job-posts" element={<JobPosts />} />
          <Route path="/career/job-posts/create" element={<CreateJobPost />} />
          <Route path="/career/settings" element={<CareerSettimgs />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/startup/:id" element={<SingleStartUp />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/webinars/create" element={<CreateWebinars />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/events/:id/edit" element={<EditEvent />} />

          <Route element={<Blog />} path="/blogs" />
          <Route element={<NewBlog />} path="/blog/create" />
          <Route element={<Guides />} path="/guides" />
          <Route element={<CreateGuide />} path="/guides/create" />
          <Route element={<Member />} path="/members/manage" />
          <Route element={<SingleMember />} path="/member/manage/:id" />
          <Route element={<Account />} path="/account" />
          <Route element={<Support />} path="/support" />
          <Route element={<SingleComplain />} path="/support/complaints/:id" />
        </Route>
        <Route
          element={
            "Comrade,how far?...Either this page does not exist or you don't have access to it"
          }
          path="*"
        />
      </Routes>
    </>
  );
}

export default App;
