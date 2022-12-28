import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Leftbar from "./Components/Leftbar/Leftbar";
import Student from "./Pages/Student/Student";
import Teacher from "./Pages/Teacher/Teacher";

function App() {
  const Layout = () => {
    return (
      <div className="theme-dark" style={{ background: "#F0F1F3" }}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />

          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Student />,
        },
        {
          path: "/teacher",
          element: <Teacher />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
