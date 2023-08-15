import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify-otp";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import ContentBlog from "./pages/ContentBlog";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Signup />} path="/sign-up" />
        <Route element={<Signin />} path="/sign-in" />
        <Route element={<Verify />} path="/verify-otp" />
        <Route element={<Forgotpassword />} path="/forgot-password" />

        <Route
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          path="/"
        />
        <Route element={<Contact />} path="/contact" />
        <Route element={<ContentBlog />} path="/content/blog" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </>
  );
}

export default App;
