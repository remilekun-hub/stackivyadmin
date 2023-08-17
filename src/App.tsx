import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify-otp";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Career from "./pages/Career";
import ProtectedRoute from "./components/ProtectedRoute";
import Blog from "./pages/Blog";
import DashboardLayout from "./components/DashboardLayout";
import NewBlog from "./pages/NewBlog";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Signup />} path="/sign-up" />
        <Route element={<Signin />} path="/sign-in" />
        <Route element={<Verify />} path="/verify-otp" />
        <Route element={<Forgotpassword />} path="/forgot-password" />

        <Route element={<DashboardLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/career"
            element={
              <ProtectedRoute>
                <Career />
              </ProtectedRoute>
            }
          />

          <Route element={<Blog />} path="/blog" />
          <Route element={<NewBlog />} path="/blog/new" />
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
